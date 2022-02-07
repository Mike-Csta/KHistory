import React from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";

import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { View, StyleSheet, Image, FlatList } from "react-native";
import Header from "./comp/Header";
import Skaner from "./comp/Skaner";
import Zeskanuj from "./comp/Zeskanuj";
const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Skaner style={styles.skaner} />
      <Zeskanuj />

      <Image
        style={styles.image2}
        source={require("../../src/kaliszTemplateLogo.png")}
      />
      <Image
        style={styles.image3}
        source={require("../../src/kaliszMapa2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#15161a",
    textAlign: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
  },

  image2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.13,
  },
  image3: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: "0%",
  },
});

export default Home;
