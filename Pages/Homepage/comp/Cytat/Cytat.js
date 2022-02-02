import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { CytatApi } from "./api";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
const Cytat = () => {
  const translation = useRef(new Animated.Value(0)).current;
  let cytatNr = Math.floor(Math.random() * 5 + 1);
  console.log(cytatNr);
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 0,
      useNativeDriver: true,
      duration: 5000,
    }).start();
  }, []);
  return (
    <View style={style.main}>
      <View style={style.container}>
        <Animated.View style={{ transform: [{ translateY: 0 }] }}>
          <Text style={style.cytat}>
            <CytatApi typ={"cytat"} numer={cytatNr} />
          </Text>
        </Animated.View>
        <View>
          <Text style={style.line}></Text>
        </View>
        <View>
          <Text style={style.autor}>
            <CytatApi typ={"autor"} numer={cytatNr} />
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
    fontSize: responsiveNumber(15),
    letterSpacing: responsiveLetterSpacing(80, 15),
    maxHeight: responsiveNumber(80),
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

export default Cytat;
