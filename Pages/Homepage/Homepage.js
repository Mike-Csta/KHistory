import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Logo from "./comp/Logo/Logo";
import Weather from "./comp/Weather/Weather";
import Cytat from "./comp/Cytat/Cytat";
import Qrbutton from "./comp/Qrbutton/Qrbutton";
import Custom_Buttons from "./comp/Custom_Buttons/Custom_Buttons";
import background from "../../src/background.jpg";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
const Homepage = () => {
  return (
    <View style={style.main}>
      <Image style={style.background} source={background} />

      <View style={style.status_bar_container}>
        <View style={style.margin_left}></View>
        <View style={style.center}>
          <View style={style.center_top}>
            <Logo />
            <Weather />
          </View>
          <View style={style.center_center}>
            <Cytat />
          </View>
          <View style={style.center_bottom}>
            <Qrbutton />
            <Custom_Buttons />
          </View>
        </View>
        <View style={style.margin_right}></View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    display: "flex",
    position: "relative",
    width: "100%",
    backgroundColor: "#282422",
  },
  status_bar_container: {
    marginTop: getStatusBarHeight(),
    display: "flex",
    flexDirection: "row",
    height: "100%",
    justifyContent: "space-between",
    // backgroundColor: '#FFBBFF',
  },

  margin_left: {
    width: RFValue(11, 1000),
    // backgroundColor: "red"
  },
  center: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 20,
    // justifyContent: "space-between",
    justifyContent: "flex-end",
  },
  center_top: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  center_center: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 0.9,
  },
  center_bottom: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginBottom: getStatusBarHeight() * 3.14,
  },
  margin_right: {
    width: RFValue(11, 1000),
    //  backgroundColor: "blue"
  },
  background: {
    position: "absolute",
    opacity: 0.1,
    top: 0,
    resizeMode: "cover",
    width: "120%",
    height: 100 + getStatusBarHeight() + "%",
    aspectRatio: 1,

    transform: [{ scaleX: 1 }, { rotate: "180deg" }],
  },
});

export default Homepage;
