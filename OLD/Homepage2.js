import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import MyClock from "./MyClock";
import ButtonC from "./Button";

const Homepage = () => {
  return (
    // Glowny View
    <View style={style.container}>
      <View style={style.container2_StatusBar}>
        {/* 1 Rzad ZEGAR POGODA*/}
        <View style={style.row1}>
          <View style={style.row1_wrapper}>
            <View style={style.zegar}>
              <Text>
                <MyClock />
              </Text>
            </View>

            <View style={style.weather}>
              <Text>WEATHER</Text>
            </View>
          </View>
        </View>

        {/* 2 Rzad CYTAT*/}
        <View style={style.row2}>
          <View style={style.row2_wrapper}>
            <View style={style.row2_space1}></View>

            <View style={style.cytat}>
              <Text style={text.cytat_text}>
                "Pjenkne poezje poetów z Kalisz nikt nie wie kim jest ten kto to
                napisał, jeszcze, dzisiaj"
              </Text>

              <Text style={text.cytat_autor}>~Mike Csta</Text>
            </View>
            <View style={style.row2_space2}></View>
          </View>
        </View>

        {/* 3 Rzad GUZIK1*/}
        <View style={style.row3}>
          <View style={style.row3_wrapper}>
            <View style={style.space1_button}></View>
            <ButtonC text="ZESKANUJ KOD" />
            <View style={style.space2_button}></View>
          </View>
        </View>
        {/* 4 Rzad GUZIK2*/}
        <View style={style.row4}>
          <View style={style.row3_wrapper}>
            <View style={style.space1_button}></View>
            <ButtonC text="ROZKŁAD JAZDY" />
            <View style={style.space2_button}></View>
          </View>
        </View>
        {/* 5 Rzad GUZIK3*/}
        <View style={style.row5}>
          <View style={style.row3_wrapper}>
            <View style={style.space1_button}></View>
            <ButtonC text="WIADOMOŚCI" />
            <View style={style.space2_button}></View>
          </View>
        </View>
        {/* 6 Rzad LOGO*/}
        <View style={style.row6}>
          <Text>AMBITNE LOGO</Text>
        </View>
        {/* <WebView source={{ uri: "https://kalisz.trapeze.fi/vm/main#" }} /> */}
      </View>
    </View>
  );
};

const text = StyleSheet.create({
  cytat_text: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: RFValue(23, 1000),
  },
  cytat_autor: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: RFValue(20, 1000),
  },
});

const style = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "#111",
  },
  container2_StatusBar: {
    marginTop: getStatusBarHeight(),
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  row1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "red",
    flex: 4,
  },
  row1_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  zegar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    fontSize: RFValue(150, 1000),
  },
  weather: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },

  row2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "blue",
    flex: 10,
  },

  row2_wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  row2_space1: {
    flex: 1,
  },
  cytat: {
    flex: 4,
  },

  row2_space2: {
    flex: 1,
  },

  row3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "pink",
    flex: 10,
    height: "100%",
  },
  row3_wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  space1_button: {
    flex: 1,
    backgroundColor: "red",
  },
  space2_button: {
    flex: 1,
    backgroundColor: "red",
  },
  row4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "white",
    flex: 10,
    height: "100%",
  },
  row5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "black",
    flex: 10,
    height: "100%",
  },
  row6: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "gray",
    flex: 4,
    height: "100%",
  },
});

export default Homepage;
