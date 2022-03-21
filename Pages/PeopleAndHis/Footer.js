import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { getStatusBarHeight } from "react-native-status-bar-height";
const Footer = () => {
  return (
    <View style={style.container}>
      <Text>Szablon Modułu</Text>
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
    backgroundColor: "#242424",
    // bottom: getStatusBarHeight(),
  },
});

export default Footer;
