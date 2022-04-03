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
});

export default Setting_page;
