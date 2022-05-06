import React, { useState } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";

import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Zeskanuj = (props) => {
  // console.log(props);
  const [help, setHelp] = useState(false);
  return (
    <View style={styles.zeskanuj_text_container}>
      <View style={styles.zeskanuj_top}>
        <Text style={styles.zeskanuj_text}>
          <Text style={styles.zeskanuj_text_color}>
            {props.Lang ? "Z" : "С"}
          </Text>
          {props.Lang ? "ESKANUJ" : "КАНУВАТИ"}
          <Text style={styles.zeskanuj_text_color}> K</Text>
          {props.Lang ? "OD" : "ОД"}
        </Text>
      </View>
      <View style={styles.zeskanuj_bottom}>
        <TouchableOpacity onPress={() => setHelp(!help)}>
          <Image
            style={styles.image5}
            source={require("../../../src/qlogo.png")}
          />
        </TouchableOpacity>
      </View>
      {!help ? (
        <></>
      ) : (
        <TouchableOpacity
          onPress={() => setHelp(!help)}
          style={styles.zeskanuj_help}
        >
          <Text style={styles.zeskanuj_help_text}>
            {props.Lang
              ? "Na niektórych przystankach autobusowych znajdują sie kody QR,zeskanuj ję aby zobaczyć ciekawostke o okolicy i jej historii"
              : "На деяких зупинках є QR-коди, відскануйте їх, щоб побачити цікаві факти про місцевість та її історію"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  zeskanuj_text_container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    width: "100%",
    flex: 1,
    marginBottom: "15%",
  },
  zeskanuj_help: {
    position: "absolute",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: responsiveNumber(10),
    backgroundColor: "#202025",
    zIndex: 5000,
    borderColor: "#aa2020",
    borderWidth: 2,
  },
  zeskanuj_help_text: {
    color: "#aaa",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize: RFValue(25, 1000),
  },
  zeskanuj_text: {
    fontSize: RFValue(37, 1000),
    color: "#454545",
    letterSpacing: responsiveLetterSpacing(120, 37),
  },
  zeskanuj_text_color: {
    color: "#912D2A",
  },

  zeskanuj_top: {},
  zeskanuj_bottom: {},

  image5: {
    width: responsiveNumber(20),
    height: responsiveNumber(20),
    marginTop: responsiveNumber(15),
    opacity: 0.123,
  },
});

export default Zeskanuj;
