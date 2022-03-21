import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Szablon = () => {
  const Json = async () => {
    let request = await fetch('http://khistory.pl/osoby.json')
    let json = await request.json()
    console.log(json.osoby[0])
    console.log(json.osoby[1])
    console.log(json.osoby[2])
  }
  useEffect(() => {
    Json()
  }, [])
  return (
    <View style={style.main}>
      <Text>Szablon Modułu</Text>
    </View>
  )
}

const style = StyleSheet.create({
  main: {},
})

export default Szablon
