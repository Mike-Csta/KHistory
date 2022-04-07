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

  const Json = async () => {
    let request = await fetch("http://khistory.pl/osoby.json");
    let json = await request.json();
    setOsoby(json.osoby);

    // console.log(json.osoby.filter((e) => e.imie + " " + e.nazwisko == autor));

    // console.log(cytatHisData, "hmm");
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
    // setcytatHisData(osoby);
    // cytatHisDataFunction();
  }, []);
  //console.log(props);
  return (
    <View style={style.container}>
      <View style={style.bar}>
        <View style={style.top}>
          <CytatHis navigation={props.navigation} data={osoby} autor={autor} />
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
