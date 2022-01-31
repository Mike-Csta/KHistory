
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import sun from "../../../../src/sun.png";

import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

import { BlurView } from "expo-blur";
const Weather = () => {
  return (
    <View style={style.main}>
      <View style={style.O2_container}>
        <BlurView
          intensity={30}
          tint="default"
          style={style.O2_Background}
        ></BlurView>
      </View>
      <View style={style.weather_container}>
        <BlurView
          intensity={30}
          tint="default"
          style={style.weather_Background}
        >
          <View style={style.weather_left}>
            <View style={style.weather_left_top}>
              <Image source={sun} style={style.weather_icon} />
            </View>
            <View style={style.weather_left_bottom}></View>
          </View>
          <View style={style.weather_right}>
            <View style={style.weather_right_top}>
              <Text style={style.kalisz}>KALISZ</Text>
            </View>
            <View style={style.weather_right_center}>
              <Text style={style.slonecznie}>Słonecznie</Text>
            </View>
            <View style={style.weather_right_bottom}></View>
          </View>
        </BlurView>
      </View>
    </View>
  );
};


const style = StyleSheet.create({
  main: {
    width: "100%",

    height: responsiveNumber(115),
    // backgroundColor: "gray",
    flexDirection: "row",
  },
  O2_container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  O2_Background: {
    flex: 0.8,
    width: "95%",
    height: "100%",
    borderRadius: responsiveNumber(17),
  },
  weather_container: {
    display: "flex",
    flex: 4,

    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",

  },
  weather_Background: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    height: "100%",
    borderRadius: responsiveNumber(10),
    backgroundColor: "red",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  weather_left: {
    display: "flex",
    flexDirection: "column",

    flex: 1,
    marginTop: responsiveNumber(10),
    marginLeft: responsiveNumber(10),
  },
  weather_left_top: { flex: 1 },
  weather_left_bottom: { flex: 0.5 },
  weather_right: {
    display: "flex",
    flexDirection: "column",

    flex: 3.3,
  },
  weather_right_top: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  weather_right_center: {
    flex: 1,

    alignItems: "center",
  },
  weather_right_bottom: { flex: 0.5 },
  kalisz: {
    color: "white",
    fontSize: RFValue(10),
    letterSpacing: responsiveLetterSpacing(50, 27),
    marginTop: responsiveNumber(12),
  },
  slonecznie: {
    color: "white",
    fontSize: RFValue(27),
    letterSpacing: responsiveLetterSpacing(53, 27),
  },
  weather_icon: {
    aspectRatio: 1,
    height: responsiveNumber(65),
  },
});

export default Weather;

