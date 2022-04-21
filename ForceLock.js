import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  PixelRatio,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const ForceLock = (props) => {
  useEffect(() => {}, []);
  const [lang, setLang] = useState(true);
  return (
    <View style={loginStyle.container}>
      <Text style={loginStyle.text}>Zablokowano zdalnie</Text>
    </View>
  );
};

const loginStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#171720",
    height: "100%",
    position: "relative",
  },
  text: { color: "white", fontSize: 20, marginBottom: 20 },
  flagi: {
    display: "flex",

    height: "20%",
    flexDirection: "row",
  },
});

export default ForceLock;
