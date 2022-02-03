import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Animated } from 'react-native'

const WeatherApi = () => {
  let [WeatherJ, setWeatherJ] = useState('0.00')

  const getWeather = async () => {
    let weather = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Kalisz&units=metric&appid=851a0d240becabfe5a8e6d2b6a24c324',
    )
    let json = await weather.json()
    console.log(json.main.temp)
    setWeatherJ(Math.round(json.main.temp * 10) / 10)
  }

  getWeather()
  return <Text>{WeatherJ + '°C'}</Text>
}
export { WeatherApi }
