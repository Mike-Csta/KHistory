import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  PixelRatio,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { getStatusBarHeight } from "react-native-status-bar-height";
const Admin_login = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [zleHaslo, setZleHaslo] = useState("");
  const [data, setData] = useState(["falalala", "falalala"]);

  const Json = async () => {
    let request = await fetch("http://khistory.pl/login.json");
    let json = await request.json();
    setData([json.login.login, json.login.haslo]);
  };

  useEffect(() => {
    Json();
  }, []);

  const Autch = () => {
    if (login == data[0] && password == data[1]) {
      return props.navigation.navigate("Admin_panel");
    } else {
      setZleHaslo("ZŁY LOGIN LUB HASLO");
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>LOGIN</Text>
      <TextInput
        style={style.textInput}
        value={login}
        onChangeText={(e) => setLogin(e)}
      />
      <Text style={style.text}>HASŁO</Text>
      <TextInput
        style={style.textInput}
        value={password}
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
      />
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          Autch();
        }}
      >
        <Text style={style.text}>ZALOGUJ</Text>
      </TouchableOpacity>
      <Text style={style.error}>{zleHaslo}</Text>
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
  text: {
    color: "white",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    letterSpacing: responsiveLetterSpacing(300, 4.3),
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#414146",
    width: "90%",
    height: responsiveNumber(35),
    margin: responsiveNumber(20),
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#303035",
    width: "30%",
    height: responsiveNumber(35),
  },
  error: {
    color: "red",
    marginTop: responsiveNumber(50),
    fontWeight: "bold",
    fontSize: responsiveNumber(20),
  },
});

export default Admin_login;
