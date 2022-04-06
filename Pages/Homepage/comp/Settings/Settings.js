import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
const Settings = (props) => {
  // console.log(props);
  return (
    <TouchableWithoutFeedback
      style={style.container2}
      onPress={() => props.navigation.navigate("Setting_page")}
    >
      <View style={style.container}>
        <Text style={style.text}>USTAWIENIA</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: responsiveNumber(50),
    backgroundColor: "#202020",
  },
  container2: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  text: { fontSize: responsiveNumber(15), color: "#888" },
});

export default Settings;
