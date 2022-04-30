import React from "react";
import { View, Text, StyleSheet, Image, PixelRatio } from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { getStatusBarHeight } from "react-native-status-bar-height";
const Footer = (props) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        {props.Lang ? "POZNAJ HISTORIE KALISZA" : "Дізнайтеся історії Каліша"}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    // height: responsiveNumber(50),
    flex: 1,
    // backgroundColor: "#212127",
    backgroundColor: "#192029",
    // bottom: getStatusBarHeight(),
  },
  text: {
    color: "white",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4.3),
    letterSpacing: responsiveLetterSpacing(300, 4.3),
  },
});

export default Footer;
