import { useFonts } from 'expo-font'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Homepage from './Pages/Homepage/Homepage'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppLoading from 'expo-app-loading'
export default function App() {
  let [fontsLoaded] = useFonts({
    BalooBhaijaan2: require('./src/BalooBhaijaan2.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View>
      <StatusBar style="light" />
      <Homepage />
    </View>
  )
}
