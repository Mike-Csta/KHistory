import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TriangleCorner,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import lih from "../../../../src/settings.png";

const Setting = (props) => {
  // console.log(props.numer)
  return (
    <View style={style.main}>
      <View style={style.centerTop}></View>
      <View style={style.center}>
        <TouchableOpacity
          style={style.t1}
          onPress={() => props.navigation.navigate("Setting_page")}
        >
          <Text style={style.text}>
            {props.Lang ? "USTAWIENIA" : "налаштування"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  t1: {
    display: "flex",
    flexDirection: "row",
    width: "80.1%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  main: {
    // height: responsiveNumber(90),

    // backgroundColor: "black",

    marginBottom: responsiveNumber(10),
  },
  centerTop: {
    // backgroundColor: "#4488ff42",

    // margin: responsiveNumber(6),

    borderRadius: responsiveNumber(22),
    opacity: 1,

    // height: responsiveNumber(90),
  },
  center: {
    backgroundColor: "#444040",
    // flex: 1,
    margin: responsiveNumber(6),

    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: responsiveNumber(18),
    opacity: 1,
    height: responsiveNumber(70),
    overflow: "hidden",
  },
  text: {
    color: "white",
    fontSize: RFValue(14),
    letterSpacing: responsiveLetterSpacing(270, 14),
    opacity: 0.93,
  },
  left: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",

    flex: 0.43,
  },
  right: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  text_2: {
    color: "white",
    fontSize: RFValue(6.5),
    letterSpacing: responsiveLetterSpacing(90, 6.5),
    opacity: 0.93,
    // backgroundColor: "red",
    marginRight: responsiveNumber(8),
    marginTop: responsiveNumber(7),
    width: responsiveNumber(30),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text_3: {
    color: "white",
    fontSize: RFValue(6.5),
    letterSpacing: responsiveLetterSpacing(90, 6.5),
    opacity: 0.93,
    // backgroundColor: "red",
    marginRight: responsiveNumber(20),
    marginBottom: responsiveNumber(7),
    width: responsiveNumber(70),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { height: responsiveNumber(50), aspectRatio: 1, opacity: 0.68 },
  image_2: {
    height: responsiveNumber(27),
    aspectRatio: 1,
    opacity: 0.68,
    marginRight: responsiveNumber(8),
  },
});

export default Setting;
