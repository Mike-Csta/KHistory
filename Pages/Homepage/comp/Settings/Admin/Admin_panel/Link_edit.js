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
      setLink0(jsonValue != null ? JSON.parse(jsonValue)[0] : "");
      setLink1(jsonValue != null ? JSON.parse(jsonValue)[1] : "");
      setLink2(jsonValue != null ? JSON.parse(jsonValue)[2] : "");
      setLink3(jsonValue != null ? JSON.parse(jsonValue)[3] : "");
    } catch (e) {
      // error reading value
    }
  };

  const [link0, setLink0] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");

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
  return (
    <SafeAreaView style={style.main}>
      <Text style={style.textInput2}>{lang ? "Zakładka 1" : "Вкладка 1"}</Text>
      <TextInput
        style={style.textInput}
        value={link0}
        onChangeText={(text) => setLink0(text)}
      ></TextInput>
      <Text style={style.textInput2}>{lang ? "Zakładka 2" : "Вкладка 2"}</Text>
      <TextInput
        style={style.textInput}
        value={link1}
        onChangeText={(text) => setLink1(text)}
      ></TextInput>
      <Text style={style.textInput2}>{lang ? "Zakładka 3" : "Вкладка 3"}</Text>
      <TextInput
        style={style.textInput}
        value={link2}
        onChangeText={(text) => setLink2(text)}
      ></TextInput>
      <Text style={style.textInput2}>{lang ? "Zakładka 4" : "Вкладка 4"}</Text>
      <TextInput
        style={style.textInput}
        value={link3}
        onChangeText={(text) => setLink3(text)}
      ></TextInput>
      <Text style={{ marginTop: responsiveNumber(30) }}>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            storeData("linki", [link0, link1, link2, link3]);
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
              "https://kalisz.naszemiasto.pl/",
              "https://www.faktykaliskie.info/",
              "https://zyciekalisza.pl/wiadomosci",
              "https://calisia.pl/",
            ]);
            props.navigation.navigate("Setting_page");
          }}
        >
          <Text style={style.text}>{lang ? "Resetuj" : "Скинути"}</Text>
        </TouchableOpacity>
      </Text>
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
