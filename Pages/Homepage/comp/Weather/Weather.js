import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { BlurView, VibrancyView } from "@react-native-community/blur";


const Weather = () => {
  return (
    <View style={style.main}>
        
      <View style={style.O2_container}>
        <View style={style.O2_Background}></View>
      </View>
      <View style={style.weather_container}>
        <View style={style.weather_Background}></View>
      </View>
      {/* <BlurView
          style={style.weather_Background}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        ><Text>ZAJEBISTY BLUR</Text></BlurView> */}
    </View>
  )
}

const style = StyleSheet.create({
  main: {
    width: "100%",
    height: RFValue(100),
    // backgroundColor: "gray",
    flexDirection: "row",
  },
  O2_container: { flex: 1, backgroundColor: "pink" },
  weather_container: {
    display: "flex",
    flex: 5,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  
  },
  weather_Background: {
    width: "90%",
    height: "90%",
    // backgroundColor: "red",
    // blurRadius:1,s
    filter: "blur(50px)",
  },xD:{
     
  }
})

export default Weather
