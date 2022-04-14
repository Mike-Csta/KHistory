import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import bus from "../../../../src/bus.png";
import news from "../../../../src/news.png";

const Custom_Buttons = (props) => {
  return (
    <View style={style.main}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Web")}
        style={style.left}
      >
        <View style={style.top}>
          <Image source={bus} style={style.image}></Image>
        </View>
        <View style={style.bottom}>
          <Text style={style.text}>
            {props.Lang ? "ROZKŁAD JAZDY" : "ГРАФІК"}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Web2")}
        style={style.right}
      >
        <View style={style.top}>
          <Image source={news} style={style.image}></Image>
        </View>
        <View style={style.bottom}>
          <Text style={style.text}>
            {props.Lang ? "WIADOMOŚCI" : "ПОВІДОМЛЕННЯ"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style1 = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: responsiveNumber(182),
    // flex: 3,

    // justifyContent: "space-around",
  },
  left: {
    backgroundColor: "#f073bb57",
    flex: 1,
    margin: responsiveNumber(6),
    display: "flex",
    flexDirection: "column",
    borderRadius: responsiveNumber(22),
    opacity: 1,
  },
  right: {
    backgroundColor: "#ff665662",
    flex: 1,
    margin: responsiveNumber(6),
    display: "flex",
    flexDirection: "column",
    borderRadius: responsiveNumber(22),
    opacity: 1,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: RFValue(12),
    letterSpacing: responsiveLetterSpacing(210, 12),
    opacity: 0.93,
  },
  top: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",

    flex: 1,
    marginTop: responsiveNumber(60),
  },
  bottom: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveNumber(34),
    flex: 1,
  },
  image: { height: responsiveNumber(110), aspectRatio: 1, opacity: 0.68 },
});

const style2 = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: responsiveNumber(182),
    // flex: 3,

    // justifyContent: "space-around",
  },
  left: {
    backgroundColor: "#f073bb57",
    flex: 1,
    margin: responsiveNumber(6),
    display: "flex",
    flexDirection: "column",
    borderRadius: responsiveNumber(22),
    opacity: 1,
  },
  right: {
    backgroundColor: "#ff665662",
    flex: 1,
    margin: responsiveNumber(6),
    display: "flex",
    flexDirection: "column",
    borderRadius: responsiveNumber(22),
    opacity: 1,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: RFValue(10),
    letterSpacing: responsiveLetterSpacing(210, 12),
    opacity: 0.93,
  },
  top: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",

    flex: 1,
    marginTop: responsiveNumber(60),
  },
  bottom: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveNumber(34),
    flex: 1,
  },
  image: { height: responsiveNumber(110), aspectRatio: 1, opacity: 0.68 },
});

let style = style1;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// console.log(windowWidth, windowHeight);

if (windowHeight / windowWidth > 1.7) {
  style = style1;
} else {
  style = style2;
}

export default Custom_Buttons;
