import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const CytatApi = (props) => {
  let [cytat, setCytat] = useState("");
  let [autor, setAutor] = useState("");

  const Json = async () => {
    let request = props.lang
      ? await fetch("http://khistory.pl/cytaty.json", {
          cache: "no-store",
        })
      : await fetch("http://khistory.pl/cytatyUk.json", {
          cache: "no-store",
        });
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
// console.log(props);
export { CytatApi };
