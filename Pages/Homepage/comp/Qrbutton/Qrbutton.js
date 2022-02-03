import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import scan from "../../../../src/scan.png";

const Qrbutton = () => {
  return (
    <View style={style.main}>
      <View style={style.centerTop}></View>
      <View style={style.center}>
        <View style={style.left}>
          <Image source={scan} style={style.image}></Image>
        </View>
        <View style={style.right}>
          <Text style={style.text}>KOD PRZYSTANKU</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // height: responsiveNumber(90),
    flex: 1,
    // backgroundColor: "black",
    justifyContent: "flex-end",
  },
  centerTop: {
    // backgroundColor: "#4488ff42",
    flex: 1,
    margin: responsiveNumber(6),

    display: "flex",
    flexDirection: "row",
    borderRadius: responsiveNumber(22),
    opacity: 1,
    // height: responsiveNumber(90),
  },
  center: {
    backgroundColor: "#4488ff42",
    // flex: 1,
    margin: responsiveNumber(6),

    display: "flex",
    flexDirection: "row",
    borderRadius: responsiveNumber(18),
    opacity: 1,
    height: responsiveNumber(70),
  },
  text: {
    color: "white",
    fontSize: RFValue(20),
    letterSpacing: responsiveLetterSpacing(210, 20),
    opacity: 0.93,
  },
  left: {
    display: "flex",
    // backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",

    flex: 0.27,
  },
  right: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: { height: responsiveNumber(50), aspectRatio: 1, opacity: 0.68 },
});

export default Qrbutton;
