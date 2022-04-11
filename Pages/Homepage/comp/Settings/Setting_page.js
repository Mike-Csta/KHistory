import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  PixelRatio,
  TouchableOpacity,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { getStatusBarHeight } from "react-native-status-bar-height";
const Setting_page = (props) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.admin}
        onPress={() => props.navigation.navigate("Admin_login")}
      >
        <Text style={style.text}>Panel Administracyjny</Text>
      </TouchableOpacity>

      <Text style={style.text3}>
        Pomoc i zgłaszanie błędów: Khistoy2022@gmail.com
      </Text>

      <Text style={style.text4}>Autorzy: Mike Csta, Szymon Szulc</Text>

      <Text style={style.text2}>Źródła: kalisz.pl, pl.wikipedia.org</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    // height: responsiveNumber(50),
    flex: 1,
    backgroundColor: "#212127",
    // bottom: getStatusBarHeight(),
  },
  admin: {
    width: "100%",
    height: "10%",
    backgroundColor: "#272732",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4.3),
    letterSpacing: responsiveLetterSpacing(300, 4.3),
  },
  text2: {
    position: "absolute",
    color: "#445",
    bottom: 20,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4.3),
    letterSpacing: responsiveLetterSpacing(50, 4.3),
  },
  text3: {
    position: "absolute",
    color: "#445",
    bottom: 50,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4.3),
    letterSpacing: responsiveLetterSpacing(50, 4.3),
  },
  text4: {
    position: "absolute",
    color: "#445",
    bottom: 80,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    letterSpacing: responsiveLetterSpacing(50, 4.3),
    fontWeight: "bold",
  },
});

export default Setting_page;
