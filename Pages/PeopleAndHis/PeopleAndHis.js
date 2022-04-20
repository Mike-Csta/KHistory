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
import AsyncStorage from "@react-native-async-storage/async-storage";
import CytatHis from "./CytatHis";
import Wafelek from "./Wafelek";
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
    setAutor(json.osoby[1].nazwisko);
    // console.log(autor);
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
  const [zabytki, setZabytki] = useState([
    {
      nazwa: "wczytywanie2",
      mopis: "wczytywanie3",
      opis: "wczytywanie4",
      obraz: "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg",
    },
  ]);

  const Json = async () => {
    let request = await fetch("http://khistory.pl/osoby.json");
    let json = await request.json();
    setOsoby(json.osoby);

    // console.log(json.osoby.filter((e) => e.imie + " " + e.nazwisko == autor));

    // console.log(cytatHisData, "hmm");
  };
  const Json2 = async () => {
    let request2 = await fetch("http://khistory.pl/zabytki.json");
    let json2 = await request2.json();
    setZabytki(json2.zabytki);

    // console.log(json.osoby.filter((e) => e.imie + " " + e.nazwisko == autor));

    // console.log(cytatHisData, "hmm");
  };

  useEffect(() => {
    // setOsoby(Json());

    JsonCytat();
    Json();
    Json2();
    // setcytatHisData(osoby);
    // cytatHisDataFunction();
  }, []);

  //console.log(props);
  return (
    <View style={style.container}>
      <View style={style.bar}>
        <View style={style.top}>
          <CytatHis navigation={props.navigation} data={osoby} autor={autor} />
          <Wafelek
            value={"POSTACIE"}
            osoby={osoby}
            page="Osoby_Page"
            navigation={props.navigation}
          />
          <ScrollOsoby navigation={props.navigation} osoby={osoby} />
          <Wafelek
            value={"ZABYTKI"}
            zabytki={zabytki}
            page="Zabytki_Page"
            navigation={props.navigation}
          />
          <ScrollZabytki navigation={props.navigation} zabytki={zabytki} />
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
