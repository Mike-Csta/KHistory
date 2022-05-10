import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  PixelRatio,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import { getStatusBarHeight } from "react-native-status-bar-height";
import notepad from "../../../../../../src/notepad.png";
import trash from "../../../../../../src/trash.png";

const Kody_Editor = (props) => {
  let [ready, setReady] = useState(false);
  console.log("first", ready);
  let [dOsoby, setDosoby] = useState({
    kod: {
      zrodlo: "",
      nazwa: "",
      opis: "",
      obraz: "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg",
    },
  });

  let [osoby, setOsoby] = useState([
    {
      kod: {
        zrodlo: "",
        nazwa: "",
        opis: "",
        obraz:
          "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg",
      },
    },
  ]);

  const Json = async () => {
    // console.log('wehuifewhuiweohi')
    let request = await fetch("http://khistory.pl/kody.json", {
      cache: "no-store",
    });
    let json = await request.json();
    setOsoby(`[${json}]`);
    console.log(json[1], "asasssasasa");
    /* It's checking if the `json.osoby` exists. */
    setReady(true);
  };
  console.log(osoby);
  console.log("third", ready);

  const getOsoby = (a) => {
    let test = osoby.filter((e) => `${e.imie} ${e.nazwisko}` != a);
    setOsoby(test);
    return test;
  };
  useEffect(() => {
    Json();
  }, [props]);
  console.log(osoby, "asasa");
  return (
    <SafeAreaView style={style.container}>
      <View style={style.panel}>
        <Text style={style.text}>Postacie Historyczne</Text>
      </View>
      <ScrollView style={style.scroll}>
        <TouchableOpacity
          style={style.button2}
          onPress={() =>
            props.navigation.push("Osoby_editor_page", [dOsoby, osoby, true])
          }
        >
          <Text style={{ fontSize: responsiveNumber(20), color: "#aab" }}>
            DODAJ POSTAĆ
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    // position: 'relative',
    display: "flex",
    width: "100%",
    height: "100%",

    // justifyContent: 'center',
    // textAlign: 'center',
    // alignItems: 'center',
    // height: responsiveNumber(50),

    backgroundColor: "#242730",
    // bottom: getStatusBarHeight(),
  },
  scroll: {
    position: "relative",
    width: "100%",
    backgroundColor: "#242730",
  },
  left: {
    flex: 0.7,
    // backgroundColor: 'blue',
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  right: {
    flex: 1,
    // backgroundColor: 'red',
  },
  rightTop: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  rightBottom: {
    flex: 0.7,
    // backgroundColor: 'purple',
    flexDirection: "row",
  },
  rightBottomRight: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flex: 0.4,
    backgroundColor: "#bb474d",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginRight: responsiveNumber(13),
  },
  rightBottomLeft: {
    flex: 1,
    // backgroundColor: 'purple',
    backgroundColor: "#5a5c73",
    borderTopLeftRadius: responsiveNumber(25),
    borderTopRightRadius: responsiveNumber(25),
    marginRight: responsiveNumber(10),
    flexDirection: "row",
  },
  iconNotepad: {
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    aspectRatio: 1,
    // backgroundColor: 'red',
    height: responsiveNumber(35),
    margin: responsiveNumber(15),
    // marginBottom: responsiveNumber(),
    marginLeft: responsiveNumber(20),
    marginRight: responsiveNumber(5),
  },
  iconTrash: {
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    aspectRatio: 1,
    // backgroundColor: 'red',
    height: responsiveNumber(40),
    opacity: 0.7,
    margin: responsiveNumber(10),
    // marginBottom: responsiveNumber(),
    marginLeft: responsiveNumber(5),
    marginRight: responsiveNumber(5),
  },
  button: {
    marginTop: responsiveNumber(7.5),
    marginBottom: responsiveNumber(7.5),
    marginRight: responsiveNumber(10),
    marginLeft: responsiveNumber(10),
    height: responsiveNumber(150),
    zIndex: 1000,
    backgroundColor: "#3a3c50",
    // justifyContent: 'center',
    // textAlign: 'center',
    // alignItems: 'center',
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
  },
  button2: {
    marginTop: responsiveNumber(7.5),
    marginBottom: responsiveNumber(7.5),
    marginRight: responsiveNumber(10),
    marginLeft: responsiveNumber(10),
    height: responsiveNumber(75),
    zIndex: 1000,
    backgroundColor: "#3a3c50",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
  },
  panel: {
    marginTop: StatusBar.currentHeight,
    width: "100%",
    height: responsiveNumber(50),
    backgroundColor: "#242730",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  obraz: {
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    height: responsiveNumber(130),
    aspectRatio: 1,
    borderRadius: responsiveNumber(15),
    margin: responsiveNumber(10),
    // marginBottom: responsiveNumber(),
    marginLeft: responsiveNumber(5),
    marginRight: responsiveNumber(5),
  },
  text: {
    color: "white",
    fontSize: responsiveNumber(13),
    fontWeight: "bold",
    letterSpacing: responsiveLetterSpacing(300, 4.3),
  },
  text2: {
    color: "white",
    fontSize: responsiveNumber(20),
    // fontWeight: "bold",
    letterSpacing: responsiveLetterSpacing(0, 4.3),
  },
});

export default Kody_Editor;
