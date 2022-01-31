import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Logo from './comp/Logo/Logo'
import Weather from './comp/Weather/Weather'
import Cytat from './comp/Cytat/Cytat'
import Qrbutton from './comp/Qrbutton/Qrbutton'
import Custom_Buttons from './comp/Custom_Buttons/Custom_Buttons'
import background from "../../src/background.jpg"

const Homepage = () => {
  return (
    <View style={style.main}>
      <Image style={style.background } source={background}/>
      <View style={style.status_bar_container}>
        <View style={style.margin_left}></View>
        <View style={style.center}>
          <Logo />
          <Weather />
          <Cytat />
          <Qrbutton />
          <Custom_Buttons />
        </View>
        <View style={style.margin_right}></View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  main: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: Dimensions.get('window').height,
    // backgroundColor: '#111',
  },
  status_bar_container: {
    marginTop: getStatusBarHeight(),
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    // backgroundColor: '#FFBBFF',
  },
  margin_left: { width: RFValue(18, 1000), backgroundColor: 'red' },
  center: { flex: 20,
    //  backgroundColor: 'white'
     },
  margin_right: { width: RFValue(18, 1000), backgroundColor: 'blue' },
  background:{
    position: "absolute"
  }
})

export default Homepage
