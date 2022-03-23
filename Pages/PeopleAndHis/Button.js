import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const Button = (e) => {
  return (
    <TouchableOpacity style={style.container}>
      <View style={style.border}></View>
      <View style={style.view}>
        <Text style={style.text}>{e.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flex: 1,
    maxHeight: responsiveNumber(60),
    backgroundColor: "#212127",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: responsiveNumber(20),
  },
  view: { justifyContent: "center", textAlign: "center", alignItems: "center" },
  text: {
    color: "white",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
    letterSpacing: responsiveLetterSpacing(120, 5.5),
  },
  border: {
    position: "absolute",
    color: "white",
    width: "75%",
    borderBottomColor: "#333",
    borderBottomWidth: 2,
    // marginBottom: 30,
  },
});

export default Button;
