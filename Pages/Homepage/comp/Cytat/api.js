import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const CytatApi = (props) => {
  let [cytat, setCytat] = useState("");
  let [autor, setAutor] = useState("");

  const Json = async () => {
    let request = props.lang
      ? await fetch("http://khistory.pl/cytaty.json")
      : await fetch("http://khistory.pl/cytatyUk.json");
    let json = await request.json();
    setCytat(json.osoby[props.numer].cytat);
    setAutor(json.osoby[props.numer].nazwisko);
  };
  useEffect(() => {
    Json();
  }, [props.lang]);

  if (props.cytat) return <Text>{cytat}</Text>;
  else return <Text>{autor}</Text>;
};

export { CytatApi };
