import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { CytatApi } from "./api";
import { Dimensions } from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
const Cytat = (props) => {
  let cytatNr = Math.floor(Math.random() * 5 + 1);
  return (
    <View style={style.main}>
      <View style={style.container}>
        <View style={{ transform: [{ translateY: 0 }] }}>
          <Text style={style.cytat}>
            <CytatApi typ={"cytat"} numer={props.numer} />
          </Text>
        </View>
        <View>
          <Text style={style.line}></Text>
        </View>
        <View>
          <Text style={style.autor}>
            <CytatApi typ={"autor"} numer={props.numer} />
          </Text>
        </View>
      </View>
    </View>
  );
};

const style1 = StyleSheet.create({
  main: {
    width: "100%",
    flex: 1,
    //  backgroundColor: "gray"
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: responsiveNumber(290),
  },
  cytat: {
    color: "white",
    textAlign: "center",
    lineHeight: responsiveNumber(23),
    fontSize: responsiveNumber(15),
    letterSpacing: responsiveLetterSpacing(80, 15),
    // maxHeight: responsiveNumber(80),
    // backgroundColor: "red",
  },
  line: {
    color: "white",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#454040",
    height: responsiveNumber(1),
    marginTop: responsiveNumber(22),
    marginBottom: responsiveNumber(17),
    opacity: 0.5,
  },
  autor: {
    color: "white",
    textAlign: "center",
    lineHeight: responsiveNumber(20),
    fontSize: responsiveNumber(13),
    letterSpacing: responsiveLetterSpacing(80, 13),
  },
});

const style2 = StyleSheet.create({
  main: {
    width: "100%",
    flex: 1,
    //  backgroundColor: "gray"
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: responsiveNumber(290),
  },
  cytat: {
    color: "white",
    textAlign: "center",
    lineHeight: responsiveNumber(20),
    fontSize: responsiveNumber(10),
    letterSpacing: responsiveLetterSpacing(80, 15),
    // maxHeight: responsiveNumber(80),
    // backgroundColor: "red",
  },
  line: {
    color: "white",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#454040",
    height: responsiveNumber(1),
    marginTop: responsiveNumber(10),
    marginBottom: responsiveNumber(8),
    opacity: 0.5,
  },
  autor: {
    color: "white",
    textAlign: "center",
    lineHeight: responsiveNumber(20),
    fontSize: responsiveNumber(9),
    letterSpacing: responsiveLetterSpacing(80, 13),
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

export default Cytat;
