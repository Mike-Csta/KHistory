import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const Logo = (props) => {
  return (
    <View style={style.main}>
      <View style={style.logo_container}>
        <Image
          style={style.logo}
          source={require("../../../../src/hlogo.png")}
        />
      </View>

      <View style={style.text_container}>
        <Text style={style.text}>
          {props.Lang ? "POZNAJ HISTORIE KALISZA" : "Дізнайтеся історії Каліша"}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    display: "flex",
    width: "100%",
    height: responsiveNumber(80),
    // backgroundColor: "#444",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  logo_container: {
    flex: 1,
    // backgroundColor: '#004',

    justifyContent: "center",
    alignItems: "center",
  },
  text_container: {
    flex: 4,
    // backgroundColor: "#400",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: RFValue(65, 1000),
    aspectRatio: 0.675,
    opacity: 0.6,

    // backgroundColor: "#040",
  },
  text: {
    fontSize: RFValue(19, 1000),

    color: "white",
    fontFamily: "BalooBhaijaan2",
    fontWeight: "normal",
    letterSpacing: responsiveLetterSpacing(30, 19),
  },
});

export default Logo;
