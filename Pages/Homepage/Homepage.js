import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Logo from "./comp/Logo/Logo";
import Weather from "./comp/Weather/Weather";
import Cytat from "./comp/Cytat/Cytat";
import Qrbutton from "./comp/Qrbutton/Qrbutton";
import Custom_Buttons from "./comp/Custom_Buttons/Custom_Buttons";
import background from "../../src/background.jpg";
import { StatusBar } from "expo-status-bar";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

let cytatNr = Math.floor(Math.random() * 5);

const Homepage = ({ navigation }) => {
  // console.log(cytatNr)
  return (
    <View style={style.main}>
      <StatusBar style="light" />
      <Image style={style.background} source={background} />
      <View style={style.status_bar_container}>
        <View style={style.margin_left}></View>
        <View style={style.center}>
          <View style={style.center_top}>
            <Logo />

            <Weather />
          </View>
          <View style={style.center_center}>
            <Cytat numer={cytatNr} />
          </View>
          <View style={style.center_bottom}>
            <Qrbutton navigation={navigation} numer={cytatNr} />
            <Custom_Buttons navigation={navigation} />
          </View>
        </View>
        <View style={style.margin_right}></View>
      </View>
    </View>
  );
};

const style1 = StyleSheet.create({
  main: {
    display: "flex",
    position: "relative",
    width: "100%",
    backgroundColor: "#282422",
    height: Dimensions.get("window").height,
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
    marginTop: responsiveNumber(22),
    flex: 0.9,
    // bottom: 10,
    // backgroundColor: "red",
  },
  center_bottom: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginBottom: responsiveNumber(40),
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

const style2 = StyleSheet.create({
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
    marginTop: responsiveNumber(22),
    flex: 0.4,
    // bottom: 10,
    // backgroundColor: "red",
  },
  center_bottom: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginBottom: getStatusBarHeight() * 2.26,
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

let style = style1;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

if (windowHeight / windowWidth > 1.8) {
  style = style1;
} else {
  style = style2;
}

// console.log(windowWidth, windowHeight)

// console.log(Dimensions.get("screen"));

// console.log(style);

export default Homepage;
