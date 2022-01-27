import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"

const Button = (e) => {
  return (
    <View style={style.container}>
      <View style={style.decoration}></View>
      <View style={style.wrapper}>
        <View style={style.textWrapper}>
          <Text style={style.text}>{e.text}</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    width: "100%",
    flex: 3,
    flexDirection: "row",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: RFValue(80, 1000),
    flex: 5,
    backgroundColor: "white",
  },
  decoration: {
    display: "flex",
    flex: 1,
    backgroundColor: "blue",
    height: "100%",
  },
  text: {
    fontSize: RFValue(27, 1000),
    textAlign: "center",
    justifyContent: "center",
  },
  textWrapper: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
})

export default Button
