import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import AppLoading from 'expo-app-loading'
// import { WeatherApi } from './api'
import sun from '../../../../src/sun.png'
import wykres from '../../../../src/Path3_3.png'
import poziomo2 from '../../../../src/poziomo2GRAY.png'
import O2 from '../../../../src/O2.png'
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from 'react-native-responsive-number'

import { BlurView } from 'expo-blur'

const Weather = () => {
  let [temp, setTemp] = useState('0.0')
  let [weatherState, setWeatherState] = useState('')
  let [weatherStateICO, setWeatherStateICO] = useState(
    '//cdn.weatherapi.com/weather/64x64/night/296.png',
  )
  let [airCond, setAirCond] = useState('1')
  let [airColor, setAirColor] = useState('green')
  let [airLevel, setAirLevel] = useState(10)
  let [ready, setReady] = useState(false)

  // Thunderstorm, Drizzle, Rain, Snow, Mist, Smoke, Haze, Dust, Fog, Sand, Dust, Ash, Squall, Tornado, Clear, Clouds
  // Burza z piorunami, Mżawka, Deszcz, Śnieg, Mgła, Dym, Mgiełka, Pył, Mgła, Piasek, Pył, Popiół, Szkwał, Tornado, Czysto, Chmury

  const CallApi = async () => {
    setReady(false)
    let request = await fetch(
      // 'https://api.openweathermap.org/data/2.5/weather?q=Kalisz&units=metric&appid=851a0d240becabfe5a8e6d2b6a24c324',
      // 'http://khistory.pl/test2.json',
      'http://api.weatherapi.com/v1/current.json?key=79b92f73f3f64256af9221026220302&q=Kalisz&aqi=yes',
    )
    let json = await request.json()
    setTemp(Math.round(json.current.temp_c))

    switch (json.current.condition.code) {
      case 1273:
      case 1276:
      case 1279:
      case 1282:
        //burza z deszczem
        setWeatherState('Burza z Deszczem')
        setWeatherStateICO(json.current.condition.icon)
        break
      case 1087:
        //burza
        setWeatherState('Burza')
        setWeatherStateICO(json.current.condition.icon)
        break
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
        setWeatherState('Deszcz')
        setWeatherStateICO(json.current.condition.icon)
        break
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
        setWeatherState('Śnieg')
        setWeatherStateICO(json.current.condition.icon)
        break
      case 1030:
      case 1147:
      case 1135:
        //mgła
        setWeatherState('Mgła')
        setWeatherStateICO(json.current.condition.icon)
        break
      case 1000:
        //słonecznie
        setWeatherState('Słonecznie')
        setWeatherStateICO(json.current.condition.icon)
        break
      case 1003:
      case 1006:
      case 1009:
        //pochmurno
        setWeatherState('Pochmurno')
        break
      default:
        //nieznany lub błąd
        setWeatherState('Error')
        setWeatherStateICO(json.current.condition.icon)
    }

    // switch (json.current.air_quality['us-epa-index']) {
    switch (1) {
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
  console.log('powietrze: ' + airCond)
  console.log('level to: ' + airLevel)

  console.log(ready)

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
                <Text style={style.stopnie}>10°C</Text>
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
          {/* <View style={style.O2_level}></View> */}
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
        <BlurView
          intensity={30}
          tint="default"
          style={style.weather_Background}
        >
          <View style={style.weather_left}>
            <View style={style.weather_left_top}>
              <Image
                source={{ uri: 'http:' + weatherStateICO }}
                style={style.weather_icon}
              />
              {/* <Image source={ico} style={style.weather_icon} /> */}
            </View>
            <View style={style.weather_left_bottom}>
              <Text style={style.stopnie}>{temp}°C</Text>
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
    backgroundColor: 'red',
    justifyContent: 'center',
    textAlign: 'center',
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

export default Weather
