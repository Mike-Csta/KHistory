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
  BackHandler,
  Alert,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
const Osoby_editor_page = (props) => {
  console.log("------------------------------------");
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
  let [obraz, setObraz] = useState(
    "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg"
  );

  const Json = async () => {
    // let request = await fetch('http://192.168.8.126/www/osoby.json')
    let request = await fetch("http://khistory.pl/osoby.json", {
      cache: "no-store",
    });
    let json = await request.json();
    setOsoby(json.osoby);
  };

  const getOsoby = (a) => {
    let test = osoby.filter((e) => `${e.imie} ${e.nazwisko}` != a);
    if (props.route.params[2]) test = osoby;
    test.unshift({
      imie: imie,
      mopis: mopis,
      nazwisko: nazwisko,
      obraz: obraz,
      opis: opis,
    });
    setOsoby(test);``
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
  }, [props]);
  return (
    // <KeyboardAvoidingView style={style.container} behavior={"height"}>
    <>
      <ScrollView style={style.container}>
        <View style={style.wrapper}>
          <View>
            <View style={style.top}>
              <Image style={style.img} source={{ uri: obraz }} />
            </View>
            <View style={style.bottom}>
              <TextInput
                style={style.textInput}
                value={obraz}
                // multiline={true}
                onChangeText={(text) => setObraz(text)}
                placeholder="Obraz"
                placeholderTextColor="#889"
              ></TextInput>
              <View style={style.bottom_name}>
                <View style={style.bottom_name_L}>
                  <TextInput
                    style={style.textInput}
                    value={imie}
                    onChangeText={(text) => setImie(text)}
                    placeholder="Imie"
                    placeholderTextColor="#889"
                  ></TextInput>
                </View>
                <View style={style.bottom_name_L}>
                  <TextInput
                    style={style.textInput}
                    value={nazwisko}
                    onChangeText={(text) => setNazwisko(text)}
                    placeholder="Nazwisko"
                    placeholderTextColor="#889"
                  ></TextInput>
                </View>
              </View>

              <TextInput
                style={style.textInput}
                value={mopis}
                onChangeText={(text) => setMopis(text)}
                multiline={true}
                placeholder="Nagłówek"
                placeholderTextColor="#889"
              ></TextInput>

              <TextInput
                style={style.textInput_w}
                value={opis}
                onChangeText={(text) => setOpis(text)}
                multiline={true}
                placeholder="Opis"
                placeholderTextColor="#889"
              ></TextInput>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={style.button_outline}>
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
            setTimeout(() => {
              props.navigation.push("Osoby_editor", osoby, Math.random());
            }, 1000);
          }}
        >
          <Text style={style.text}>Zapisz</Text>
        </TouchableOpacity>
      </View>
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
    width: responsiveNumber(90),
    height: responsiveNumber(35),
    backgroundColor: "#dd4444",
    bottom: 2.5,
    borderBottomLeftRadius: responsiveNumber(5),
    borderBottomRightRadius: responsiveNumber(5),
    borderTopLeftRadius: responsiveNumber(16),
    borderTopRightRadius: responsiveNumber(16),
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  button_outline: {
    position: "absolute",
    width: responsiveNumber(115),
    height: responsiveNumber(37),
    right: responsiveNumber(30),
    // backgroundColor: "gray",
    bottom: 0,
    borderBottomLeftRadius: responsiveNumber(0),
    borderBottomRightRadius: responsiveNumber(0),
    borderTopLeftRadius: responsiveNumber(28),
    borderTopRightRadius: responsiveNumber(28),
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 20,
    borderBottomWidth: 0,
    borderColor: "#aa3035",
  },
  text: {
    color: "#fff",
    fontSize: responsiveNumber(16.5),
    fontWeight: "bold",
    letterSpacing: responsiveLetterSpacing(16.5, 15),
  },
});

export default Osoby_editor_page;
