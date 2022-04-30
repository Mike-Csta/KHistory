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
  const [dane, setDane] = useState([]);
  // console.log("askjfhskd", props);

  useEffect(() => {
    let test = props.data.filter(
      (e) => `${e.imie} ${e.nazwisko}` == props.autor
    );
    if (undefined != test[0]) setDane(test[0]);
  });
  console.log(props.data);
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        props.navigation.push("CytatHis_Page", [props.data, props.autor]);
        // console.log(props.data.opis, "sahfdkash");
      }}
    >
      <View style={style.left}>
        <Image style={style.image} source={{ uri: dane.obraz }} />
      </View>
      <View style={style.right}>
        <View style={style.elem}>
          <Text style={style.imie}>{props.autor}</Text>
        </View>
        <View style={style.elem2}>
          <Text style={style.opis}>{dane.mopis}</Text>
        </View>
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
    // backgroundColor: "#aa5555",
    backgroundColor: "#212938",
    borderColor: "#cc5555",
    borderWidth: 2,
    borderBottomWidth: 6,
    margin: responsiveNumber(10),
    marginLeft: 0,
    width: responsiveNumber(152),
    height: responsiveNumber(190),
    borderRadius: responsiveNumber(20),
    overflow: "hidden",
  },
  image: {
    height: responsiveNumber(190),
    aspectRatio: 1,
    borderRadius: responsiveNumber(20),
  },
  imie: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7.3),
    // marginBottom: responsiveNumber(15),
    // marginTop: responsiveNumber(19),
    color: "#cc5555",
    fontWeight: "bold",
    // backgroundColor: "red",
  },
  opis: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
    marginLeft: responsiveNumber(10),
    marginRight: responsiveNumber(10),
    top: 0,
    color: "#ddd",
    // backgroundColor: "red",
  },
  elem: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "red",
  },
  elem2: {
    position: "relative",
    flex: 1,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "red",
  },
});

export default CytatHis;
