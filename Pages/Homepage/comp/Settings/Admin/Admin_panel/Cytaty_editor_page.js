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
  let [cytaty, setCytaty] = useState([
    {
      nazwisko: "wczytywanie2",
      opis: "wczytywanie4",
      cytat: "wczytywanie3",
    },
  ]);
  let [osoby, setOsoby] = useState([
    {
      imie: "wczytywanie1",
      nazwisko: "wczytywanie2",
      mopis: "wczytywanie3",
      opis: "wczytywanie4",
      obraz: "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg",
    },
  ]);
  let [cytat, setCytat] = useState("");
  let [nazwiskoCytat, setNazwiskoCytat] = useState("");
  let [opisCytat, setOpisCytat] = useState("");
  let [imie, setImie] = useState("");
  let [nazwisko, setNazwisko] = useState("");
  let [mopis, setMopis] = useState("");
  let [opis, setOpis] = useState("");
  let [osoba, setOsoba] = useState("");
  let [obraz, setObraz] = useState(
    "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg"
  );

  const JsonCytat = async () => {
    let request = await fetch("http://khistory.pl/cytaty.json", {
      cache: "no-store",
    });
    let json = await request.json();
    setCytaty(json.osoby);
    // console.log(json.osoby);
  };

  const Json = async () => {
    // let request = await fetch('http://192.168.8.126/www/osoby.json')
    let request = await fetch("http://khistory.pl/osoby.json", {
      cache: "no-store",
    });
    let json = await request.json();
    setOsoby(json.osoby);
    setOsoba(
      json.osoby.filter(
        (e) =>
          e.imie == props.route.params[0].nazwisko.split(" ")[0] &&
          e.nazwisko == props.route.params[0].nazwisko.split(" ")[1]
      )
    );
    setObraz(
      json.osoby.filter(
        (e) =>
          e.imie == props.route.params[0].nazwisko.split(" ")[0] &&
          e.nazwisko == props.route.params[0].nazwisko.split(" ")[1]
      )[0].obraz
    );

    setMopis(
      json.osoby.filter(
        (e) =>
          e.imie == props.route.params[0].nazwisko.split(" ")[0] &&
          e.nazwisko == props.route.params[0].nazwisko.split(" ")[1]
      )[0].mopis
    );

    setObraz(
      json.osoby.filter(
        (e) =>
          e.imie == props.route.params[0].nazwisko.split(" ")[0] &&
          e.nazwisko == props.route.params[0].nazwisko.split(" ")[1]
      )[0].obraz
    );

    setOpis(
      json.osoby.filter(
        (e) =>
          e.imie == props.route.params[0].nazwisko.split(" ")[0] &&
          e.nazwisko == props.route.params[0].nazwisko.split(" ")[1]
      )[0].opis
    );
    // console.log(json.osoby)
  };
  // console.log(osoba[0].obraz);
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

  const getCytaty = (a) => {
    let test = cytaty.filter((e) => `${e.opis}` != a);
    test.unshift({
      nazwisko: imie + " " + nazwisko,
      opis: Math.random() + Math.random() * Math.random() + Math.random() / 100,
      cytat: cytat,
    });
    return test;
  };

  const load = () => {
    setNazwiskoCytat(props.route.params[0].nazwisko);
    setImie(props.route.params[0].nazwisko.split(" ")[0]);
    setNazwisko(props.route.params[0].nazwisko.split(" ")[1]);
    setCytat(props.route.params[0].cytat);
    setOpisCytat(props.route.params[0].opis);
  };
  // console.log(osoby);
  useEffect(() => {
    Json();
    JsonCytat();
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
                placeholder="Obraz"
                placeholderTextColor="#889"
                onChangeText={(text) => setObraz(text)}
              ></TextInput>
              <View style={style.bottom_name}>
                <View style={style.bottom_name_L}>
                  <TextInput
                    style={style.textInput}
                    value={imie}
                    placeholder="Imię"
                    placeholderTextColor="#889"
                    onChangeText={(text) => setImie(text)}
                  ></TextInput>
                </View>
                <View style={style.bottom_name_L}>
                  <TextInput
                    style={style.textInput}
                    value={nazwisko}
                    placeholder="Nazwisko"
                    placeholderTextColor="#889"
                    onChangeText={(text) => setNazwisko(text)}
                  ></TextInput>
                </View>
              </View>

              <TextInput
                style={style.textInput}
                value={cytat}
                placeholder="Cytat"
                placeholderTextColor="#889"
                onChangeText={(text) => setCytat(text)}
                multiline={true}
              ></TextInput>

              <TextInput
                style={style.textInput}
                value={mopis}
                placeholder="Nagłówek o autorze"
                placeholderTextColor="#889"
                onChangeText={(text) => setMopis(text)}
                multiline={true}
              ></TextInput>

              <TextInput
                style={style.textInput_w}
                value={opis}
                placeholder="Opis autora"
                placeholderTextColor="#889"
                onChangeText={(text) => setOpis(text)}
                multiline={true}
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
              cache: "no-store",
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                charset: "utf-8",
              },
              body: JSON.stringify(
                getOsoby(
                  props.route.params[0].nazwisko.split(" ")[0] +
                    " " +
                    props.route.params[0].nazwisko.split(" ")[1]
                )
              ),
            }),
              fetch("http://khistory.pl/cytaty.php", {
                cache: "no-store",
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  charset: "utf-8",
                },
                body: JSON.stringify(getCytaty(props.route.params[0].opis)),
              }),
              setTimeout(() => {
                props.navigation.push("Cytat_editor", [Math.random() * 2]);
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
