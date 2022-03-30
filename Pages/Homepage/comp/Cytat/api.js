import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const CytatApi = (props) => {
  let [cytat, setCytat] = useState("");
  let [autor, setAutor] = useState("");

  const Json = async () => {
    let request = await fetch("http://khistory.pl/cytaty.json");
    let json = await request.json();
    setCytat(json.osoby[props.numer].cytat);
    setAutor(
      json.osoby[props.numer].imie + " " + json.osoby[props.numer].nazwisko
    );
  };
  useEffect(() => {
    Json();
  }, []);

  if (props.cytat) return <Text>{cytat}</Text>;
  else return <Text>{autor}</Text>;
};

export { CytatApi };
