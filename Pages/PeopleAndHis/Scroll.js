import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const Scroll = () => {
  return (
    <View style={style.container}>
      <Text>Szablon Modułu</Text>
    </View>
  );
};

const style1 = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: responsiveNumber(180),
    backgroundColor: "#523",
  },
});

const style2 = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: responsiveNumber(130),
    backgroundColor: "#523",
  },
});

let style = style1;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowWidth, windowHeight);

if (windowHeight / windowWidth > 1.8) {
  style = style1;
} else {
  style = style2;
}

export default Scroll;
