import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import CytatHis from "./CytatHis";
import Button from "./Button";
import ScrollOsoby from "./ScrollOsoby";
import ScrollZabytki from "./ScrollZabytki";
import Footer from "./Footer";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const PeopleAndHis = (props) => {
  // console.log(props);
  const [cytatHisData, setcytatHisData] = useState([
    {
      imie: "wczytywanie1",
      nazwisko: "wczytywanie2",
      mopis: "wczytywanie3",
      opis: "wczytywanie4",
      obraz: "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg",
    },
  ]);
  const [autor, setAutor] = useState("");

  const JsonCytat = async () => {
    let request = await fetch("http://khistory.pl/cytaty.json");
    let json = await request.json();
    // console.log(json.osoby[props.route.params[0]].nazwisko);
    // setAutor(json.osoby[props.route.params[0]].nazwisko);
    setAutor(json.osoby[1].nazwisko);

    console.log(json.osoby[1], "falalala");
  };

  const [osoby, setOsoby] = useState([
    {
      imie: "wczytywanie1",
      nazwisko: "wczytywanie2",
      mopis: "wczytywanie3",
      opis: "wczytywanie4",
      obraz: "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg",
    },
  ]);

  const Json = async () => {
    let request = await fetch("http://khistory.pl/osoby.json");
    let json = await request.json();
    // console.log(json.osoby);
    setOsoby(json.osoby);
    // return osoby;
    console.log(json.osoby.filter((e) => e.imie + " " + e.nazwisko == autor));
    // console.log(autor);
    // let dkasjhfio = json.osoby.filter(
    //   (e) => e.imie + " " + e.nazwisko == autor
    // );
    setcytatHisData(
      // dkasjhfio[0]
      json.osoby.filter((e) => e.imie + " " + e.nazwisko == autor)
    );
    // console.log(cytatHisData);
  };

  const cytatHisDataFunction = async () => {
    // let test = osoby.map((e) => `${e.imie} ${e.nazwisko}` == autor);
    // let test = osoby;
    // console.log("dfsjdkhfbs" + test[0].nazwisko);
  };

  useEffect(() => {
    // setOsoby(Json());
    JsonCytat();
    Json();
    // cytatHisDataFunction();
  }, []);
  //console.log(props);
  return (
    <View style={style.container}>
      <View style={style.bar}>
        <View style={style.top}>
          <CytatHis navigation={props.navigation} data={cytatHisData} />
          <Button value={"POSTACIE"} />
          <ScrollOsoby navigation={props.navigation} osoby={osoby} />
          <Button value={"ZABYTKI"} />
          <ScrollZabytki />
        </View>
        <View style={style.bottom}>
          <Footer />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    width: "100%",
    // backgroundColor: "#212127",
    backgroundColor: "#192029",
    height: Dimensions.get("window").height + StatusBar.currentHeight,
  },
  bar: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: StatusBar.currentHeight,
    height: "100%",
  },
  top: { flex: 1, justifyContent: "space-between" },
  bottom: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 0.1,
    marginBottom: responsiveNumber(40),
  },
});

export default PeopleAndHis;
