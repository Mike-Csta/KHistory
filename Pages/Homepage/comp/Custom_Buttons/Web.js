import React, { useEffect, useState, useRef } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import icon from '../../../../src/bus.png'
import tlobus from '../../../../src/tlobus.png'
import search from '../../../../src/search.png'
import leftArrow from '../../../../src/left-arrow.png'
import rightArrow from '../../../../src/right-arrow.png'
import { WebView } from 'react-native-webview'
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from 'react-native-responsive-number'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native'

const Web = () => {
  const jsCode = `document.querySelector('Body').style.filter = 'invert(1) hue-rotate(-10deg) contrast(95%)';
  document.querySelector('Body').style.backgroundColor="#121212"
 
  document.querySelector('.ol-viewport').style.overflow= "visible"
  document.querySelector('#map-h').style.display= "none"
  document.querySelector('.navbar').style.display= "none"`

  //<loading
  const wysuwanie = useRef(new Animated.Value(0)).current
  const fade = (value = 1) => {
    Animated.timing(wysuwanie, {
      toValue: value,
      duration: 2000,
      useNativeDriver: false,
    }).start()
  }

  const wysuwanie2 = useRef(new Animated.Value(0)).current
  const fade8 = (value = 1) => {
    Animated.timing(wysuwanie2, {
      toValue: value,
      duration: 70,
      useNativeDriver: false,
    }).start()
  }

  const indeks = useRef(new Animated.Value(-100)).current
  const fade7 = (value = 49) => {
    Animated.timing(indeks, {
      toValue: value,
      duration: 2,
      useNativeDriver: false,
    }).start()
  }
  const contentStyle = function () {
    return {
      marginTop: getStatusBarHeight(),
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'space-between',
      textAlign: 'center',
      flexDirection: 'column',
      opacity: wysuwanie,
      zIndex: indeks,
    }
  }

  const container3 = function () {
    return {
      height: responsiveNumber(0),
      backgroundColor: '#121212',
      // position: "absolute",
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      bottom: responsiveNumber(65) + getStatusBarHeight() * 2.22,
      zIndex: indeks,
      opacity: wysuwanie2,
      marginTop: getStatusBarHeight() - responsiveNumber(73),
    }
  }

  const bar_container = function () {
    return {
      position: 'absolute',
      width: '100%',
      height: responsiveNumber(50),

      bottom: 0,
      zIndex: 1001,
      display: 'flex',
      flexDirection: 'row',
      zIndex: indeks,
      opacity: wysuwanie2,
    }
  }
  //>loading

  //<pojawianie logo
  const pojawianie = useRef(new Animated.Value(100)).current
  const fade2 = (value = 0) => {
    Animated.timing(pojawianie, {
      toValue: value,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }
  const fade5 = (value = -100) => {
    Animated.timing(pojawianie, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }
  const opacity = useRef(new Animated.Value(0)).current
  const fade3 = (value = 0.7) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 800,
      useNativeDriver: false,
    }).start()
  }

  const fade6 = (value = 0) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const contentStyle2 = function () {
    return {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      opacity: opacity,
      marginTop: pojawianie,
    }
  }

  //>pojawianie logo

  //<background_Rotate
  const rotate = new Animated.Value(0)

  Animated.timing(rotate, {
    toValue: 1,
    duration: 1000,
    Easing,
    useNativeDriver: false,
  }).start()

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['165deg', '240deg'],
  })

  const opacity2 = useRef(new Animated.Value(1)).current
  const fade4 = (value = 0) => {
    Animated.timing(opacity2, {
      toValue: value,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const contentStyle3 = function () {
    return {
      // rotation: rotate,
      transform: [
        { translateX: -1000 },
        { translateY: -850 },
        { scale: 0.7 },
        { rotate: spin },
      ],
      opacity: opacity2,
      zIndex: 52,
    }
  }
  //>background_Rotate

  useEffect(() => {
    setTimeout(() => {
      fade()
    }, 1120)
    setTimeout(() => {
      fade3()
    }, 200)
    setTimeout(() => {
      fade4()
    }, 1100)
    setTimeout(() => {
      fade5()
    }, 1000)
    setTimeout(() => {
      fade6()
    }, 1000)
    setTimeout(() => {
      fade7()
    }, 1500)
    setTimeout(() => {
      fade8()
    }, 600)
    fade2()
    // fade4();
  }, [])
  const webViewRef = useRef(null)
  let godzina = new Date().getHours()
  let minuta = new Date().getMinutes()
  const [tajm, setTajm] = useState(
    `${godzina}:${minuta < 10 ? '0' + minuta : minuta}`,
  )

  const goback = () => {
    webViewRef.current.goBack()
  }

  const goforward = () => {
    webViewRef.current.goForward()
  }

  setInterval(() => {
    setTajm(`${godzina}:${minuta < 10 ? '0' + minuta : minuta}`)
  }, 5000)
  const [linkText, setLinkText] = useState(
    'https://kalisz.trapeze.fi/vm/main#',
  )
  const [changeText, onChangeText] = useState(
    'https://kalisz.trapeze.fi/vm/main#',
  )
  const [link, setLink] = useState('https://kalisz.trapeze.fi/vm/main#')

  const onSearch = () => {
    setLink(changeText)
  }

  return (
    <View style={styles.container}>
      <Animated.View style={styles.loading_tlo_container}>
        <Animated.Image style={contentStyle3()} source={tlobus} />
      </Animated.View>
      <Animated.View style={contentStyle2()}>
        <Image style={styles.loading_icon} source={icon} />
      </Animated.View>
      <Animated.View style={contentStyle()}>
        <WebView
          style={styles.container2}
          source={{ uri: link }}
          ref={webViewRef}
          originWhitelist={['*']}
          javaScriptEnabledAndroid={true}
          injectedJavaScript={jsCode}
          scalesPageToFit={false}
          userAgent="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36"
        />
      </Animated.View>
      <Animated.View style={bar_container()}>
        <TouchableOpacity style={styles.bar_back} onPress={goback}>
          <View style={styles.bar_back}>
            <Image
              source={leftArrow}
              style={{
                height: responsiveNumber(25),
                aspectRatio: 1,
                opacity: 0.4,
              }}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.bar}>
          <View style={styles.bar_link}>
            <View style={styles.bar_input}>
              <TextInput
                value={changeText}
                onChangeText={onChangeText}
                style={{
                  color: '#777',
                  width: responsiveNumber(225),
                  textAlign: 'center',
                }}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.bar_search} onPress={onSearch}>
          <View style={styles.bar_search}>
            <Image
              source={search}
              style={{
                height: responsiveNumber(25),
                aspectRatio: 1,
                opacity: 0.1,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bar_forwards} onPress={goforward}>
          <View style={styles.bar_forwards}>
            <Image
              source={rightArrow}
              style={{
                height: responsiveNumber(25),
                aspectRatio: 1,
                opacity: 0.4,
              }}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={container3()}>
        <Text style={styles.container3_text}>{tajm}</Text>
      </Animated.View>
    </View>
  )
}

const styles1 = StyleSheet.create({
  bar_back: {
    backgroundColor: '#151515',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bar: {
    backgroundColor: '#151515',
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bar_input: {
    backgroundColor: '#202020',
    // paddingRight: responsiveNumber(80),
    // paddingLeft: responsiveNumber(80),
    borderRadius: responsiveNumber(30),
  },
  bar_search: {
    backgroundColor: '#151515',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  bar_forwards: {
    backgroundColor: '#151515',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  loading_icon: {
    height: responsiveNumber(150),
    aspectRatio: 1,
    marginTop: 0,
  },
  loading_tlo_container: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#121212',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    flexDirection: 'column',
  },
  margin: {},
  container2: {
    flex: 1,
    marginTop: getStatusBarHeight() - responsiveNumber(73),
    // aspectRatio: 1,
  },

  container3_text: { color: '#222', fontSize: responsiveNumber(80) },
})

const styles2 = StyleSheet.create({
  loading_icon: {
    height: responsiveNumber(150),
    aspectRatio: 1,
    marginTop: 0,
  },
  loading_tlo_container: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#121212',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    flexDirection: 'column',
  },
  margin: {},
  container2: {
    marginTop: getStatusBarHeight(),
    flex: 1,
    marginTop: getStatusBarHeight() - responsiveNumber(73),
    // aspectRatio: 1,
  },
  container3: { flex: 0.1, backgroundColor: '#121212' },
})

let styles = styles1
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
// console.log(windowWidth, windowHeight);

if (windowHeight / windowWidth > 1.8) {
  styles = styles1
} else {
  styles = styles1
}

export default Web
