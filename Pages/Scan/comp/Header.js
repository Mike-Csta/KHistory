import React from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";

import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { Text, View, StyleSheet, Image } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header_wrap}>
      <View style={styles.header}>
        <View style={styles.header_left}>
          <Image
            style={styles.image4}
            source={require("../../../src/hlogo.png")}
          />
        </View>
        <View style={styles.header_right}>
          <View style={styles.header_right_wrap}>
            <Text style={styles.header_text}>
              {props.Lang
                ? "POZNAJ HISTORIĘ KALISZA"
                : "Дізнайтеся історії Каліша"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_wrap: {
    width: "100%",
    marginTop: getStatusBarHeight() + responsiveNumber(10),
    marginBottom: responsiveNumber(20),
  },

  header: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    zIndex: 2,
  },
  header_left: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    flex: 1,
    marginLeft: "17%",
  },
  header_right: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    flex: 3,
    marginRight: "17%",
  },
  header_right_wrap: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
  },

  header_text: {
    color: "white",
    fontSize: RFValue(15, 1000),
    letterSpacing: responsiveLetterSpacing(180, 15),
    justifyContent: "center",
    textAlign: "center",
  },

  image4: {
    aspectRatio: 0.675,
    flex: 0.65,
    opacity: 0.8,
  },
});

export default Header;
