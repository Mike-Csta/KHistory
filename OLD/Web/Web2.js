import React from "react";

import { WebView } from "react-native-webview";

import { View, Text, StyleSheet, Image } from "react-native";

const Web2 = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: "https://kalisz.naszemiasto.pl/" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default Web2;
