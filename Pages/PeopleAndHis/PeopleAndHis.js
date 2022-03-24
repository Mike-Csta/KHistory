import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import CytatHis from "./CytatHis";
import Button from "./Button";
import ScrollOsoby from "./ScrollOsoby";
import ScrollZabytki from "./ScrollZabytki";
import Footer from "./Footer";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const PeopleAndHis = ({ navigation }) => {
  const Json = async () => {
    let request = await fetch("http://khistory.pl/osoby.json");
    let json = await request.json();
    console.log(json.osoby[0]);
    console.log(json.osoby[1]);
    console.log(json.osoby[2]);
  };
  useEffect(() => {
    Json();
  }, []);
  return (
    <View style={style.container}>
      <View style={style.bar}>
        <View style={style.top}>
          <CytatHis />
          <Button value={"POSTACIE"} />
          <ScrollOsoby navigation={navigation} />
          <Button value={"ZABYTKI"} />
          <ScrollZabytki />
        </View>
        <View style={style.bottom}>
          <Footer />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    width: "100%",
    backgroundColor: "#212127",
    height: Dimensions.get("window").height + StatusBar.currentHeight,
  },
  bar: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: StatusBar.currentHeight,
    height: "100%",
  },
  top: { flex: 1, justifyContent: "space-between" },
  bottom: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 0.1,
    marginBottom: responsiveNumber(40),
  },
});

export default PeopleAndHis;
