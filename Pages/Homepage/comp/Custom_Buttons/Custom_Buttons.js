import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const Custom_Buttons = () => {
  return (
    <View style={style.main}>
      <Text>Button Modułu</Text>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    width: "100%",
    // height: responsiveNumber(120),
    flex: 2,
    backgroundColor: "blue",
  },
});

export default Custom_Buttons;
