import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import flagaPl from "./src/pl.png";
import flagaUk from "./src/uk.png";
const App_Welcome = (props) => {
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`${key}`, jsonValue);
    } catch (e) {
      // saving error
    }
  };
  useEffect(() => {
    storeData("Lang", true);
  }, []);
  const [lang, setLang] = useState(true);
  return (
    <View style={style.container}>
      <Text style={style.text}>
        {lang ? "WITAJ W KHISTORY, WYBIERZ JĘZYK:" : "Привіт, виберіть мову:"}
      </Text>
      <Text style={{ color: "#aaa", fontSize: 10, marginBottom: 20 }}>
        {!lang ? "WITAJ W KHISTORY, WYBIERZ JĘZYK:" : "Привіт, виберіть мову:"}
      </Text>
      <View style={style.flagi}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: lang ? "#123" : "transparent",
            borderBottomColor: lang ? "#823" : "transparent",
            borderBottomWidth: 3,
          }}
          onPress={() => storeData("Lang", true) && setLang(true)}
        >
          <Image source={flagaPl} style={style.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: !lang ? "#123" : "transparent",
            borderBottomColor: !lang ? "#861" : "transparent",
            borderBottomWidth: 3,
          }}
          onPress={() => storeData("Lang", false) && setLang(false)}
        >
          <Image source={flagaUk} style={style.image} />
        </TouchableOpacity>
      </View>
      <Text style={style.text}></Text>
      <Button
        onPress={() =>
          storeData("Welcome", true) && props.navigation.navigate("Home")
        }
        title={lang ? "Dalej" : "Далі"}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#051523",
    height: "100%",
    position: "relative",
  },
  text: { color: "white", fontSize: 20, marginBottom: 20 },
  flagi: {
    display: "flex",

    height: "20%",
    flexDirection: "row",
  },

  image: { height: 100, aspectRatio: 1.5 },
});

export default App_Welcome;
