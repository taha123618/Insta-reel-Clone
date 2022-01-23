import React, { useRef, useState, useEffect } from 'react'
import {
  View, Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Video from 'react-native-video';
import imgPath from './source/constants/imgPath';
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import LinearGradient from 'react-native-linear-gradient';
// import { demodata } from './source/constants/demodata';

// Dimensions
const { height, width } = Dimensions.get('window');

const App = () => {
  const [index, setIndex] = useState(0);

  const videoref = useRef(null)

  const onBuffer = (e) => {
    console.log("buffering..", e);
  }
  const onError = (e) => {
    console.log("error falsed", e);
  }

  useEffect(() => {
    if (!!videoref.current) {
      videoref.current.seek(0)
    }
  }, [index]);

  const renderItem = ({ item, index }) => {
    return {
      <>
      <View style={{ flex: 1, height: height }}>
        <Video
          source={{ uri: "" }}
          poster={item.thumb}
          // poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
          posterResizeMode='cover'
          ref={videoref}
          resizeMode="cover"
          onBuffer={onBuffer}
          onError={onError}
          repeat
          paused={index != index}
          style={styles.backgroundVideo}
        />
        <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.6)']}
          style={styles.bottomView}>
          {/* bottom  */}
          <View>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <Image source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw0xbX80222MZFHdySYRPGFm&ust=1642625827267000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj1rJyYvPUCFQAAAAAdAAAAABAD" }}
                style={styles.profileImg}
              />
            </View>
            <Text style={{
              marginHorizontal: 8,
              color: 'white',
              fontWeight: 'bold'
            }}>Peeky blinder</Text>
            <TouchableOpacity>
              <Text style={{
                color: 'white',
                fontWeight: 'bold'
              }}>Follow</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text numberOfLines={1} style={{ flex: 1, color: 'white' }}>
              {item.description}</Text>
            <TouchableOpacity>
              <Text style={{
                color: 'white',
                fontWeight: 'bold'
              }}>More</Text>
            </TouchableOpacity>
          </View>

          {/* bottom images  */}
          <View style={{
            ...styles.flexHorizontal,
            marginVertical: 8
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{
                marginHorizontal: 8,
                tintColor: 'gray'
              }} source={imgPath.icHeart} />
              <Image style={{ tintColor: 'gray' }} source={imgPath.icHeart} />
              <Image style={{
                marginHorizontal: 8,
                tintColor: 'gray'
              }} source={imgPath.icHeart} />
              <Image style={{ tintColor: 'gray' }} source={imgPath.icHeart} />
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{
                width: 15, height: 15,
                tintColor: 'white'
              }} source={imgPath.icHeart} />
              <Text style={{ marginLeft: 4, color: 'white' }}>94.6K</Text>
            </View>

            <View style={{
              marginLeft: 8,
              flexDirection: 'row', alignItems: 'center'
            }}>
              <Image style={{
                width: 15, height: 15,
                tintColor: 'white'
              }} source={imgPath.icComment} />
              <Text style={{ marginLeft: 4, color: 'white' }}>112</Text>
            </View>
          </View>
        </LinearGradient>










      </View>
    </>
    }
  }

const onChangeIndex = (index) => {
  setIndex(index)
}

return (
  <View style={{ flex: 1, backgroundColor: 'black' }}>
    <StatusBar barStyle="light-content" />
    {/* SwiperFlist  */}
    <SwiperFlatList
      vertical={true}
      data={demodata}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      onChangeIndex={onChangeIndex}
    />
    {/* hearder  */}

    <View style={{
      position: 'absolute',
      top: 40, left: 16
    }}>
      <Text style={styles.textstyle}>Reels</Text>
    </View>
    <View style={{
      position: 'absolute',
      top: 40, right: 16
    }}>
      <Image style={{ tintColor: 'white' }} source={imgPath.icCamera} />
    </View>



  </View>
)
}


export default App

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absoulte',
    width: width
  },
  flexHorizontal: {
    flexDirection: row,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  profileImg: {

  }
});
