import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Animated } from 'react-native'

const WeatherApi = (props) => {
  let [temp, setTemp] = useState('0.00')
  let [air, setAir] = useState('0.00')
  let [weatherState, setWeatherState] = useState('Clear')

  const getWeather = async () => {
    let request = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Kalisz&units=metric&appid=851a0d240becabfe5a8e6d2b6a24c324',
    )
    let json = await request.json()
    // console.log(json.main.temp)
    setTemp(Math.round(json.main.temp * 10) / 10)
  }

  if (props.typ == 'pogoda') {
    getWeather()
    return <Text>{temp + '°C'}</Text>
  } else if (props.typ == 'stan') {
    return <Text>{temp}</Text>
  }
}
export { WeatherApi }
