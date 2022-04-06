import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  PixelRatio,
  TouchableOpacity,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import QQQ from "../../src/qqq.jpg";

const CytatHis = (props) => {
  // const [dane, setDane] = useState([
  //   {
  //     imie: "wczytywanie1",
  //     nazwisko: "wczytywanie2",
  //     mopis: "wczytywanie3",
  //     opis: "wczytywanie4",
  //     obraz: "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg",
  //   },
  // ]);

  // useEffect(() => {
  //   setDane(props.data);
  // }, []);

  //console.log("askjfhskd", props);

  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        props.navigation.push("CytatHis_Page", [
          props.data[0].imie,
          props.data[0].nazwisko,
          props.data[0].obraz,
          props.data[0].mopis,
          props.data[0].opis,
        ]);
        // console.log(props.data.opis, "sahfdkash");
      }}
    >
      <View style={style.left}>
        <Image style={style.image} source={QQQ} />
      </View>
      <View style={style.right}>
        <Text style={style.imie}>Adam Asnyk</Text>
        <Text style={style.opis}>
          Wybitny polski poeta, publicysta i działacz patriotyczny. Urodził się
          w Kaliszu 11 września 1838 roku. Pochodził z rodziny szlacheckiej.
          Jeg...
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#192029",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    // marginTop: getStatusBarHeight(),
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: responsiveNumber(10),
  },
  right: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#aa5555",
    margin: responsiveNumber(10),
    marginLeft: 0,
    width: responsiveNumber(152),
    height: responsiveNumber(190),
    borderRadius: responsiveNumber(20),
  },
  image: {
    height: responsiveNumber(190),
    aspectRatio: 1,
    borderRadius: responsiveNumber(20),
  },
  imie: {
    flex: 0.21,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7.3),
    marginBottom: responsiveNumber(20),
    marginTop: responsiveNumber(20),
    color: "white",
  },
  opis: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
    marginLeft: responsiveNumber(10),
    marginRight: responsiveNumber(10),
    bottom: 0,
    color: "#ddd",
  },
});

export default CytatHis;
