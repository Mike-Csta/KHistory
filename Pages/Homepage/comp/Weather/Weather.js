import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import AppLoading from 'expo-app-loading'
// import { WeatherApi } from './api'
import wykres from '../../../../src/Path3_3.png'
import poziomo2 from '../../../../src/poziomo2GRAY.png'
import O2 from '../../../../src/O2.png'
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from 'react-native-responsive-number'

import { BlurView } from 'expo-blur'

import burzaZDeszczem from '../../../../src/icons/0.png'
import burza from '../../../../src/icons/1.png'
import deszcz from '../../../../src/icons/2.png'
import snieg from '../../../../src/icons/3.png'
// import mgla from '../../../../src/icons/4.png'
import slonecznie from '../../../../src/icons/5.png'
import pochmurno from '../../../../src/icons/6.png'
import error from '../../../../src/icons/404.png'

//Burza z deszczem = 0, Burza = 1, Deszcz = 2, Śnieg = 3, Mgła = 4, Słonecznie = 5, Pochmurno = 6, ERROR = 404
function getStatus(code) {
  switch (code) {
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      //burza z deszczem
      return { Status: 'Burza z Deszczem', Ikona: burzaZDeszczem }
    case 1087:
      //burza
      return { Status: 'Burza', Ikona: burza }
    case 1063:
    case 1150:
    case 1153:
    case 1168:
    case 1171:
    case 1180:
    case 1183:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1198:
    case 1201:
    case 1240:
    case 1243:
    case 1246:
      //deszcz
      return { Status: 'Deszcz', Ikona: deszcz }
    case 1066:
    case 1069:
    case 1072:
    case 1114:
    case 1117:
    case 1204:
    case 1207:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1237:
    case 1249:
    case 1252:
    case 1255:
    case 1258:
    case 1261:
    case 1264:
      //śnieg
      return { Status: 'Śnieg', Ikona: snieg }
    case 1030:
    case 1147:
    case 1135:
      //mgła
      return { Status: 'Mgła', Ikona: mgla }
    case 1000:
      //słonecznie
      return { Status: 'Słonecznie', Ikona: slonecznie }
    case 1003:
    case 1006:
    case 1009:
      //pochmurno
      return { Status: 'Pochmurno', Ikona: pochmurno }
    default:
      //nieznany lub błąd
      return { Status: 'ERROR', Ikona: error }
  }
}

const Weather = () => {
  let [temp, setTemp] = useState(['0.0', '0,0', '0,0'])
  let [weatherState, setWeatherState] = useState(['', '', ''])
  let [weatherStateICO, setWeatherStateICO] = useState([
    '../../../../src/icons/0.png',
    '../../../../src/icons/0.png',
    '../../../../src/icons/0.png',
  ])
  let [airCond, setAirCond] = useState('1')
  let [airColor, setAirColor] = useState('green')
  let [airLevel, setAirLevel] = useState(10)
  let [ready, setReady] = useState(false)

  //Burza z deszczem = 0, Burza = 1, Deszcz = 2, Śnieg = 3, Mgła = 4, Słonecznie = 5, Pochmurno = 6, ERROR = 404

  const CallApi = async () => {
    setReady(false)
    let request = await fetch(
      // 'https://api.openweathermap.org/data/2.5/weather?q=Kalisz&units=metric&appid=851a0d240becabfe5a8e6d2b6a24c324',
      // 'http://khistory.pl/forecast.json',
      // "http://api.weatherapi.com/v1/current.json?key=79b92f73f3f64256af9221026220302&q=Kalisz&aqi=yes"
      'http://api.weatherapi.com/v1/forecast.json?key=79b92f73f3f64256af9221026220302&q=Kalisz&days=3&aqi=yes&alerts=no',
    )
    let json = await request.json()
    setTemp([
      Math.round(json.current.temp_c),
      Math.round(json.forecast.forecastday[1].day.avgtemp_c),
      Math.round(json.forecast.forecastday[2].day.avgtemp_c),
    ])
    setWeatherState([
      getStatus(json.current.condition.code).Status,
      getStatus(json.forecast.forecastday[1].day.condition.code).Status,
      getStatus(json.forecast.forecastday[2].day.condition.code).Status,
    ])

    setWeatherStateICO([
      getStatus(json.current.condition.code).Ikona,
      getStatus(json.forecast.forecastday[1].day.condition.code).Ikona,
      getStatus(json.forecast.forecastday[2].day.condition.code).Ikona,
    ])

    switch (json.current.air_quality['us-epa-index']) {
      // switch (1) {
      case 1:
        setAirCond('Dobry')
        setAirLevel(75)
        setAirColor('green')

        break
      case 2:
        setAirCond('Średni')
        setAirLevel(90)
        setAirColor('green')

        break
      case 3:
        setAirCond('Zły')
        setAirLevel(100)
        setAirColor('yellow')

        break
      case 4:
        setAirCond('Zły')
        setAirLevel(110)
        setAirColor('orange')

        break
      case 5:
        setAirCond('Bardzo Zły')
        setAirLevel(130)
        setAirColor('red')

        break
      case 6:
        setAirCond('Ekstremalnie Zły')
        setAirLevel(145)
        setAirColor('red')

        break
      default:
        setAirCond('***pobieranie***')
        setTimeout(function () {
          setAirCond('***ERROR***')
        }, 2000)
        break
    }

    setReady(true)
    // console.log(json.main.temp)
  }

  useEffect(() => {
    CallApi()
  }, [])
  // setAirLevel(1 * 10 + 35)

  let [daysState, setDaysState] = useState(true)

  const wysuwanie = useRef(new Animated.Value(-80)).current
  const opacity = useRef(new Animated.Value(0)).current

  const fade = (value = 0) => {
    Animated.timing(wysuwanie, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  const fade1 = (value = 1) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const fade_b = (value = -80) => {
    Animated.timing(wysuwanie, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  const fade1_b = (value = 0) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const days_weather = function () {
    return {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      top: 0,
      opacity: opacity,
      marginTop: wysuwanie,
      borderRadius: responsiveNumber(10),
      backgroundColor: '#434040',
      overflow: 'hidden',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
    }
  }

  const wys = () => {
    fade()
    fade1()
    setDaysState(!daysState)
  }
  const wys_b = () => {
    fade_b()
    fade1_b()
    setDaysState(!daysState)
  }

  if (ready == false) {
    return (
      <View style={style.main}>
        <View style={style.O2_container}>
          <BlurView
            intensity={30}
            tint="default"
            style={style.O2_Background}
          >
            {/* <View style={style.O2_level}></View> */}
            <Image
              source={poziomo2}
              style={{
                top: responsiveNumber(70),
                tintColor: 'green',
              }}
            />
            <Image source={O2} style={style.O2img} />
          </BlurView>
        </View>
        <View style={style.weather_container}>
          <BlurView
            intensity={30}
            tint="default"
            style={style.weather_Background}
          >
            <View style={style.weather_left}>
              <View style={style.weather_left_top}>
                {/* <Image source={ico} style={style.weather_icon} /> */}
              </View>
              <View style={style.weather_left_bottom}>
                <Text style={style.stopnie}>14°C</Text>
              </View>
            </View>
            <View style={style.weather_right}>
              <View style={style.weather_right_top}>
                <Text style={style.kalisz}>KALISZ</Text>
              </View>
              <View style={style.weather_right_center}>
                <Text style={style.slonecznie}>{weatherState}</Text>
              </View>
              <View style={style.weather_right_bottom}>
                <Image source={wykres} style={style.weather_wykres} />
                <Text style={style.powietrze}>Stan Powietrza Dobry</Text>
              </View>
            </View>
          </BlurView>
        </View>
      </View>
    )
  }

  return (
    <View style={style.main}>
      <View style={style.O2_container}>
        <BlurView
          intensity={30}
          tint="default"
          style={style.O2_Background}
        >
          <Image
            source={poziomo2}
            style={{
              top: responsiveNumber(airLevel),
              tintColor: airColor,
            }}
          />
          <Image source={O2} style={style.O2img} />
        </BlurView>
      </View>
      <View style={style.weather_container}>
        {/* 3 days */}
        <TouchableOpacity
          style={style.weather_Background3}
          onPress={daysState ? wys : wys_b}
        >
          <Animated.View
            intensity={30}
            tint="default"
            style={days_weather()}
          >
            {/* dzien 1 */}
            <View style={days.left}>
              <Text style={days.dzien}>DZISIAJ</Text>
              <Image
                source={weatherStateICO[0]}
                style={style.weather_icon}
              />
              <Text style={days.stan}>{weatherState[0]}</Text>
              <Text style={days.stopnie}>{temp[0]}°C</Text>
            </View>
            {/* dzien 2 */}
            <View style={days.center}>
              <Text style={days.dzien}>JUTRO</Text>
              <Image
                source={weatherStateICO[1]}
                style={style.weather_icon}
              />
              <Text style={days.stan}>{weatherState[1]}</Text>
              <Text style={days.stopnie}>{temp[1]}°C</Text>
            </View>
            {/* dzien 3 */}
            <View style={days.right}>
              <Text style={days.dzien}>POJUTRZE</Text>
              <Image
                source={weatherStateICO[2]}
                style={style.weather_icon}
              />
              <Text style={days.stan}>{weatherState[2]}</Text>
              <Text style={days.stopnie}>{temp[2]}°C</Text>
            </View>
            {/*  */}
          </Animated.View>
        </TouchableOpacity>
        {/* 3 days */}

        <BlurView
          intensity={30}
          tint="default"
          style={style.weather_Background2}
        >
          <View style={style.weather_left}>
            <View style={style.weather_left_top}>
              <Image
                source={weatherStateICO[0]}
                style={style.weather_icon}
              />
            </View>
            <View style={style.weather_left_bottom}>
              <Text style={style.stopnie}>{temp[0]}°C</Text>
            </View>
          </View>
          <View style={style.weather_right}>
            <View style={style.weather_right_top}>
              <Text style={style.kalisz}>KALISZ</Text>
            </View>
            <View style={style.weather_right_center}>
              <Text style={style.slonecznie}>{weatherState[0]}</Text>
            </View>
            <View style={style.weather_right_bottom}>
              <Image source={wykres} style={style.weather_wykres} />
              <Text style={style.powietrze}>Stan Powietrza {airCond}</Text>
            </View>
          </View>
        </BlurView>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  main: {
    width: '100%',

    height: responsiveNumber(115),
    // backgroundColor: "gray",
    flexDirection: 'row',
  },
  O2_container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  O2_Background: {
    flex: 0.8,
    width: '95%',
    height: '100%',
    borderRadius: responsiveNumber(17),
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  O2_level: {
    backgroundColor: 'green',
    width: '100%',
    height: '20%',
    borderRadius: responsiveNumber(17),
    bottom: '0%',
  },
  // od 45 do 145
  poziomo2: { opacity: 0.8 },

  O2img: {
    height: '19%',
    aspectRatio: 1,
    marginBottom: responsiveNumber(10),
  },
  weather_container: {
    display: 'flex',
    flex: 4,
    position: 'relative',
    // backgroundColor: "yellow",
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  weather_Background: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    height: '100%',
    borderRadius: responsiveNumber(10),

    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',

    alignItems: 'center',
  },
  weather_Background2: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    height: '100%',
    borderRadius: responsiveNumber(10),

    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',

    alignItems: 'center',
  },
  weather_Background3: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    width: '95%',
    height: '120%',
    borderRadius: responsiveNumber(10),

    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',

    alignItems: 'center',
  },
  weather_Background2: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    height: '100%',
    borderRadius: responsiveNumber(10),

    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',

    alignItems: 'center',
  },
  weather_Background3: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    width: '95%',
    height: '120%',
    borderRadius: responsiveNumber(10),
    overflow: 'hidden',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    zIndex: 2,
    alignItems: 'center',
  },
  weather_left: {
    display: 'flex',
    flexDirection: 'column',

    flex: 1,
    marginTop: responsiveNumber(10),
    marginLeft: responsiveNumber(10),
  },
  weather_left_top: { flex: 1 },
  weather_left_bottom: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveNumber(6),
  },
  weather_right: {
    display: 'flex',
    flexDirection: 'column',

    flex: 3.3,
  },
  weather_right_top: {
    flex: 0.05,
    marginTop: responsiveNumber(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  weather_right_center: {
    flex: 1,
    marginBottom: responsiveNumber(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather_right_bottom: {
    position: 'relative',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kalisz: {
    color: 'white',
    fontSize: responsiveNumber(10),
    letterSpacing: responsiveLetterSpacing(50, 27),
    marginTop: responsiveNumber(12),
  },
  slonecznie: {
    color: 'white',
    fontSize: RFValue(28),
    letterSpacing: responsiveLetterSpacing(53, 27),
  },
  stopnie: {
    color: 'white',
    fontSize: RFValue(20),
    letterSpacing: responsiveLetterSpacing(0, 20),
  },
  powietrze: {
    color: 'white',
    fontSize: RFValue(10),
    letterSpacing: responsiveLetterSpacing(53, 12),
    marginBottom: responsiveNumber(37),
  },
  weather_icon: {
    aspectRatio: 1,
    height: responsiveNumber(65),
  },
  weather_wykres: {
    position: 'absolute',
    bottom: responsiveNumber(-6),
    opacity: 0.4,
  },
})

const days = StyleSheet.create({
  left: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  dzien: {
    color: 'white',
    fontSize: RFValue(9),
    letterSpacing: responsiveLetterSpacing(0, 9),
    opacity: 0.8,
  },
  stan: {
    color: 'white',
    fontSize: RFValue(15),
    letterSpacing: responsiveLetterSpacing(0, 15),
  },
  stopnie: {
    color: 'white',
    fontSize: RFValue(15),
    letterSpacing: responsiveLetterSpacing(0, 15),
  },
})

export default Weather
