import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const Button = () => {
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
    flex: 1,
    maxHeight: responsiveNumber(60),

    backgroundColor: "#236",
  },
});

export default Button;
