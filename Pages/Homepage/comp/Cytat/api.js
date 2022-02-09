import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";
import { firebase, db } from "../../../../firebase";
import { doc, getDoc, setDocument } from "firebase/firestore";

const CytatApi = (props) => {
  let [cytat, setCytat] = useState({
    Cytat1: [
      "Piękne poezje poetów z kalisza nikt nie wie kim jest ten kto to napsiał, jeszcze, dzisiaj",
      "Mike Csta",
    ],
    Cytat2: [
      "Głowę swą oprzyj na mym ramieniu I do księżyca obróć swą twarz, I oświecona w bladym promieniu O widmie szczęścia dumaj i marz!",
      "Adam Asnyk",
    ],
    Cytat3: [
      "Jednego serca! tak mało! tak mało, Jednego serca trzeba mi na ziemi! Coby przy mojem miłością zadrżało: A byłbym cichym pomiędzy cichemi...",
      "Adam Asnyk",
    ],
    Cytat4: [
      "Między nami nic nie było. żadnych zwierzeń, wyznań żadnych; Nic nas z sobą nie łączyło Prócz wiosennych marzeń zdradnych",
      "Adam Asnyk",
    ],
    Cytat5: [
      "Jeśli jakaś dłoń ma miejsce w drugiej dłoni, to właśnie jest przyjaźń.",
      "Adam Asnyk",
    ],
  });

  let data = new Date().getDate(); // będzie 31 cytatów i zależne będą od dnia miesiąca
  let sec = new Date().getSeconds(); // to chwilowo
  const Read = () => {
    const myDoc = doc(db, "Cytaty", "Wszystkie");

    getDoc(myDoc).then((snapshot) => {
      if (snapshot.exists) {
        setCytat(snapshot.data());
      } else {
        alert("Brak połączenia z internetem");
        console.log("none");
      }
    });
  };

  useEffect(() => {
    Read();
  }, []);

  if (props.typ == "cytat") {
    return <Text>{cytat[`Cytat${props.numer}`][0]}</Text>;
  } else if (props.typ == "autor") {
    return <Text>{cytat[`Cytat${props.numer}`][1]}</Text>;
  } else {
    return <Text>Wiel Błond</Text>;
  }
};

export { CytatApi };
