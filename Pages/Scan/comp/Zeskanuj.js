import React from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";

import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { Text, View, StyleSheet, Image } from "react-native";

const Zeskanuj = () => {
  return (
    <View style={styles.zeskanuj_text_container}>
      <View style={styles.zeskanuj_top}>
        <Text style={styles.zeskanuj_text}>
          <Text style={styles.zeskanuj_text_color}>Z</Text>ESKANUJ
          <Text style={styles.zeskanuj_text_color}>K</Text>OD
        </Text>
      </View>
      <View style={styles.zeskanuj_bottom}>
        <Image
          style={styles.image5}
          source={require("../../../src/qlogo.png")}
        />
      </View>
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
