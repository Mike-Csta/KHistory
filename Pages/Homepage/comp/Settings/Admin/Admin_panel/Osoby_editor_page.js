import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
const Osoby_editor_page = (props) => {
  let [osoby, setOsoby] = useState([
    {
      imie: "wczytywanie1",
      nazwisko: "wczytywanie2",
      mopis: "wczytywanie3",
      opis: "wczytywanie4",
      obraz: "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg",
    },
  ]);

  let [imie, setImie] = useState("");
  let [nazwisko, setNazwisko] = useState("");
  let [mopis, setMopis] = useState("");
  let [opis, setOpis] = useState("");
  let [obraz, setObraz] = useState("");

  const Json = async () => {
    // let request = await fetch('http://192.168.8.126/www/osoby.json')
    let request = await fetch("http://khistory.pl/osoby.json");
    let json = await request.json();
    setOsoby(json.osoby);
    // console.log(json.osoby)
  };

  const getOsoby = (a) => {
    let test = osoby.filter((e) => `${e.imie} ${e.nazwisko}` != a);
    test.unshift({
      imie: imie,
      mopis: mopis,
      nazwisko: nazwisko,
      obraz: obraz,
      opis: opis,
    });
    return test;
  };

  const getJson = () => {};

  const load = () => {
    setImie(props.route.params[0].imie);
    setNazwisko(props.route.params[0].nazwisko);
    setMopis(props.route.params[0].mopis);
    setOpis(props.route.params[0].opis);
    setObraz(props.route.params[0].obraz);
  };

  useEffect(() => {
    Json();
    load();
  }, []);

  return (
    // <KeyboardAvoidingView style={style.container} behavior={"height"}>
    <>
      <ScrollView style={style.container}>
        <View style={style.wrapper}>
          <View>
            <View style={style.top}>
              <Image
                style={style.img}
                source={{ uri: props.route.params[0].obraz }}
              />
            </View>
            <View style={style.bottom}>
              <TextInput
                style={style.textInput}
                value={obraz}
                // multiline={true}
                onChangeText={(text) => setObraz(text)}
              ></TextInput>
              <View style={style.bottom_name}>
                <View style={style.bottom_name_L}>
                  <TextInput
                    style={style.textInput}
                    value={imie}
                    onChangeText={(text) => setImie(text)}
                  ></TextInput>
                </View>
                <View style={style.bottom_name_L}>
                  <TextInput
                    style={style.textInput}
                    value={nazwisko}
                    onChangeText={(text) => setNazwisko(text)}
                  ></TextInput>
                </View>
              </View>

              <TextInput
                style={style.textInput}
                value={mopis}
                onChangeText={(text) => setMopis(text)}
                multiline={true}
              ></TextInput>

              <TextInput
                style={style.textInput_w}
                value={opis}
                onChangeText={(text) => setOpis(text)}
                multiline={true}
              ></TextInput>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          fetch("http://khistory.pl/osoby.php", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              charset: "utf-8",
            },
            body: JSON.stringify(
              getOsoby(
                props.route.params[0].imie +
                  " " +
                  props.route.params[0].nazwisko
              )
            ),
          });
        }}
      >
        <Text>Zapisz Chyba</Text>
      </TouchableOpacity>
    </>
  );
};

{
}
const style = StyleSheet.create({
  container: {
    // position: "relative",
    height: Dimensions.get("window").height,
    backgroundColor: "#192029",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    position: "relative",

    width: "100%",
    flexDirection: "row",
  },
  top: {
    // height: responsiveNumber(300),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: responsiveNumber(20),
  },
  bottom: {
    textAlign: "center",
    alignItems: "center",
  },
  bottom_name: { display: "flex", flexDirection: "row", width: "95%" },
  bottom_name_L: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  img: {
    width: "90%",
    aspectRatio: 1,
    borderRadius: responsiveNumber(2000),
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  textInput: {
    backgroundColor: "#243040",
    width: "90%",
    minHeight: responsiveNumber(35),
    marginBottom: responsiveNumber(15),
    fontSize: responsiveNumber(18),
    borderRadius: responsiveNumber(10),
    maxWidth: "100%",
    fontWeight: "bold",
    color: "#ddd",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: responsiveNumber(10),
  },
  textInput_w: {
    borderRadius: responsiveNumber(10),
    padding: responsiveNumber(10),
    backgroundColor: "#243040",
    width: "90%",
    minHeight: responsiveNumber(35),
    marginBottom: responsiveNumber(50),
    fontSize: responsiveNumber(18),
    maxWidth: "100%",
    fontWeight: "bold",
    color: "#ddd",
    justifyContent: "center",
    // textAlign: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    width: responsiveNumber(100),
    height: responsiveNumber(30),
    backgroundColor: "white",
    bottom: 0,
  },
});

export default Osoby_editor_page;
