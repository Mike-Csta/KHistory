import React, { useState, useEffect } from "react";
import { Restart } from "fiction-expo-restart";
import { NativeModules } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  PixelRatio,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import AsyncStorage from "@react-native-async-storage/async-storage";
import flagaPl from "../../../../src/pl.png";
import flagaUk from "../../../../src/uk.png";
const Setting_page = (props) => {
  const [lang, setLang] = useState(true);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("Lang");
      setLang(jsonValue != null ? JSON.parse(jsonValue) : true);
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`${key}`, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.flagi}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: lang ? "#232329" : "transparent",
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
            backgroundColor: !lang ? "#232329" : "transparent",
            borderBottomColor: !lang ? "#861" : "transparent",
            borderBottomWidth: 3,
          }}
          onPress={() => storeData("Lang", false) && setLang(false)}
        >
          <Image source={flagaUk} style={style.image} />
        </TouchableOpacity>
      </View>
      <Text style={style.text}></Text>
      <TouchableOpacity
        onPress={() => props.navigation.push("Home", "xD")}
        style={style.button}
      >
        <Text style={style.text5}>{lang ? "zapisz" : "зберегти"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.admin}
        onPress={() => props.navigation.navigate("Link_edit")}
      >
        <Text style={style.text}>Strony Domyślne Przeglądarki</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.admin2}
        onPress={() => props.navigation.navigate("Admin_login")}
      >
        <Text style={style.text}>Panel Administracyjny</Text>
      </TouchableOpacity>
      <Text style={style.text3}>
        Pomoc i zgłaszanie błędów: Khistory2022@gmail.com
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
    marginTop: responsiveNumber(150),
    width: "100%",
    height: "10%",
    backgroundColor: "#272732",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  admin2: {
    marginTop: responsiveNumber(10),
    width: "100%",
    height: "10%",
    backgroundColor: "#272732",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#323642",
    height: responsiveNumber(40),
    width: responsiveNumber(100),
    borderRadius: responsiveNumber(100),
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
  text5: {
    color: "white",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
    letterSpacing: responsiveLetterSpacing(300, 4.3),
    marginBottom: responsiveNumber(3),
  },
  flagi: {
    display: "flex",

    height: "20%",
    flexDirection: "row",
  },

  image: { height: 100, aspectRatio: 1.5, borderRadius: responsiveNumber(10) },
});

export default Setting_page;
