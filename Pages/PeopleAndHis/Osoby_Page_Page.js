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
  SafeAreaView,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import QQQ from "../../src/qqq.jpg";

const Osoby_Page_Page = (props) => {
  console.log("xD");
  return (
    <SafeAreaView style={style.container}>
      <View style={style.bottomBackground}></View>
      <View style={style.bar}>
        <View style={style.top}>
          <Image
            style={style.image}
            source={{ uri: props.route.params.obraz }}
          />
        </View>
        <View style={style.bottom_wraper}>
          <View style={style.bottom}>
            <Text
              style={style.imie}
            >{`${props.route.params.imie} ${props.route.params.nazwisko}`}</Text>
            <ScrollView style={style.opis_scroll}>
              <Text style={style.mopis}>{props.route.params.mopis}</Text>
              <Text style={style.opis}>{props.route.params.opis}</Text>
              <Text style={style.footer}>Źródło: kalisz.pl</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    width: "100%",
    backgroundColor: "#192029",
    // height: Dimensions.get("window").height + StatusBar.currentHeight,
  },
  bottomBackground: {
    bottom: 0,
    position: "absolute",
    height: "33%",
    width: "100%",
    zIndex: -100,
    borderBottomWidth: 300,
    borderBottomColor: "#243040",
    borderLeftWidth: 0,
    borderLeftColor: "transparent",
    borderRightWidth: 800,
    borderRightColor: "transparent",
    borderStyle: "solid",
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
    zIndex: 1000,
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
    // backgroundColor: "#2f2f40",
    height: "100%",
    marginLeft: 0,
    borderRadius: responsiveNumber(20),
  },

  image: {
    height: responsiveNumber(330),
    aspectRatio: 1,
    borderRadius: responsiveNumber(2000),
  },
  imie: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(9.2),
    marginBottom: responsiveNumber(10),
    marginTop: responsiveNumber(12),
    color: "#cf5555",
    textTransform: "uppercase",
  },

  mopis: {
    marginLeft: responsiveNumber(13),
    marginRight: responsiveNumber(13),
    marginBottom: responsiveNumber(0),
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    justifyContent: "center",
    color: "#cfcfcf",
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    // textAlign: "center",
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  opis: {
    marginLeft: responsiveNumber(18),
    marginRight: responsiveNumber(18),
    marginBottom: responsiveNumber(0),
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6.1),
    justifyContent: "center",
    color: "#aaa",
    alignItems: "center",
    textAlign: "center",
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(10),
    fontWeight: "900",
    zIndex: 1000,
  },
  opis_scroll: {
    flex: 1,
    marginLeft: responsiveNumber(10),
    marginRight: responsiveNumber(10),
    // zIndex: 1000,
  },
  footer: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    // marginTop: responsiveNumber(-21),
    marginBottom: responsiveNumber(30),
    color: "#445",
  },
});

export default Osoby_Page_Page;
