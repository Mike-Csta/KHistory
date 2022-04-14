import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  PixelRatio,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const Wafelek = (props) => {
  return (
    <TouchableWithoutFeedback
      style={style.container}
      onPress={() =>
        props.navigation.push(
          props.page,
          !props.osoby ? [props.zabytki] : [props.osoby]
        )
      }
    >
      <View style={style.container}>
        <View style={style.border}></View>
        <View style={style.view}>
          <Text style={style.text}>{props.value}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flex: 1,
    maxHeight: responsiveNumber(60),
    // backgroundColor: "#212127",
    backgroundColor: "#192029",
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
    // borderBottomColor: "#333",
    borderBottomColor: "#222835",
    borderBottomWidth: 2,
    // marginBottom: 30,
  },
});

export default Wafelek;
