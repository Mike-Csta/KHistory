import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { responsiveNumber } from "react-native-responsive-number";
import { responsiveLetterSpacing } from "react-native-responsive-number";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Link_edit = (props) => {
  const [lang, setLang] = useState(true);
  const getLang = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("Lang");
      setLang(jsonValue != null ? JSON.parse(jsonValue) : true);
    } catch (e) {
      // error reading value
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("linki");
      setLink(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      // error reading value
    }
  };

  const [link, setLink] = useState([
    "https://www.kalisz.pl/",
    "https://www.google.pl/",
    "https://www.google.pl/",
    "https://www.google.pl/",
  ]);

  useEffect(() => {
    getLang();
    getData();
  }, []);

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`${key}`, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const update = (text, index) => {
    setLink((state) => {
      const newObject = [...state];
      newObject[`${index}`] = text;
      return newObject;
    });
  };

  return (
    <SafeAreaView style={style.main}>
      <ScrollView style={style.ScrollView}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={style.textInput2}>
            {lang ? "Zakładka 1" : "Вкладка 1"}
          </Text>
          <TextInput
            style={style.textInput}
            value={link[0]}
            editable={false}
          ></TextInput>
        </View>
        {link.map((e, index) =>
          index > 0 ? (
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text style={style.textInput2}>
                {lang ? "Zakładka " + (index + 1) : "Вкладка " + (index + 1)}
              </Text>
              <TextInput
                style={style.textInput}
                value={link[`${index}`]}
                onChangeText={(text) => update(text, index)}
              ></TextInput>
            </View>
          ) : (
            <Text></Text>
          )
        )}
      </ScrollView>
      <View style={{ marginBottom: responsiveNumber(30) }}>
        <Text style={{ marginTop: responsiveNumber(30) }}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              storeData("linki", link);
              props.navigation.navigate("Setting_page");
            }}
          >
            <Text style={style.text}>{lang ? "Zapisz" : "Зберегти"}</Text>
          </TouchableOpacity>
        </Text>
        <Text style={{ marginTop: responsiveNumber(30) }}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              storeData("linki", [
                "https://www.kalisz.pl/",
                "https://www.google.pl/",
                "https://www.google.pl/",
                "https://www.google.pl/",
              ]);
              props.navigation.navigate("Setting_page");
            }}
          >
            <Text style={style.text}>{lang ? "Resetuj" : "Скинути"}</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: "#223",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  ScrollView: {
    textAlign: "center",
    width: "100%",
  },
  textInput: {
    backgroundColor: "#334",
    borderRadius: responsiveNumber(15),
    height: responsiveNumber(40),
    width: "90%",
    marginTop: responsiveNumber(5),
    textAlign: "center",
    color: "#ccd",
    fontSize: responsiveNumber(13),
  },
  textInput2: {
    width: "90%",
    marginTop: responsiveNumber(30),
    fontSize: responsiveNumber(14),
    letterSpacing: responsiveLetterSpacing(40, 14),
    textAlign: "center",
    color: "#aab",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#557",
    borderRadius: responsiveNumber(15),
    height: responsiveNumber(40),
    width: responsiveNumber(90),
    marginTop: responsiveNumber(5),
    textAlign: "center",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: { color: "#fff" },
});

export default Link_edit;
