import React from "react";
import { StatusBar } from "expo-status-bar";
import Homepage from "./Homepage";
import { View, Text, StyleSheet, Image } from "react-native";
export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <Homepage />
    </View>
  );
}
