import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  PixelRatio,
  StatusBar,
  ScrollView,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import QQQ from "../../src/qqq.jpg";

const ScrollOsoby_Page = (props) => {
  console.log(props.route);
  return (
    <View style={style.container}>
      <View style={style.bar}>
        <View style={style.top}>
          <Image style={style.image} source={{ uri: props.route.params[4] }} />
        </View>
        <View style={style.bottom_wraper}>
          <View style={style.bottom}>
            <Text
              style={style.imie}
            >{`${props.route.params[0]} ${props.route.params[1]}`}</Text>
            <ScrollView style={style.opis_scroll}>
              <Text style={style.mopis}>{props.route.params[2]}</Text>
              <Text style={style.opis}>{props.route.params[3]}</Text>
              <Text style={style.footer}>Źródło: kalisz.pl</Text>
            </ScrollView>
          </View>
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
    // justifyContent: "flex-end",
    marginTop: StatusBar.currentHeight,
    height: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  top: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // margin: responsiveNumber(10),
    // backgroundColor: "red",
  },
  bottom_wraper: {
    position: "relative",
    // justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flex: 1,
    height: "100%",
    display: "flex",
    margin: responsiveNumber(10),
  },
  bottom: {
    display: "flex",
    position: "relative",
    flex: 0.92,
    backgroundColor: "#2f2f40",
    height: "100%",
    marginLeft: 0,
    borderRadius: responsiveNumber(20),
  },

  image: {
    height: responsiveNumber(300),
    aspectRatio: 1,
    borderRadius: responsiveNumber(20),
  },
  imie: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    marginBottom: responsiveNumber(10),
    marginTop: responsiveNumber(20),
    color: "#cf5555",
  },

  mopis: {
    marginLeft: responsiveNumber(10),
    marginRight: responsiveNumber(10),
    marginBottom: responsiveNumber(0),
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    justifyContent: "center",
    color: "#cfcfcf",
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "justify",
    // textAlign: "center",
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(6),
  },
  opis: {
    marginLeft: responsiveNumber(10),
    marginRight: responsiveNumber(10),
    marginBottom: responsiveNumber(0),
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
    justifyContent: "center",
    color: "#ccc",
    alignItems: "center",
    textAlign: "justify",
  },
  opis_scroll: {
    flex: 1,
    marginLeft: responsiveNumber(10),
    marginRight: responsiveNumber(10),
  },
  footer: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: responsiveNumber(-21),
    marginBottom: responsiveNumber(30),

    color: "#445",
  },
});

export default ScrollOsoby_Page;
