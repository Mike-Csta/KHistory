import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Animated,
  Image,
  TouchableHighlight,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  const wysuwanie = useRef(new Animated.Value(-800)).current;

  const fadeIn = () => {
    Animated.timing(wysuwanie, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(wysuwanie, {
      toValue: -800,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    fadeIn();

    setTimeout(() => {
      setScanned(false);
    }, 500);
  };

  const contentStyle = function () {
    return {
      position: "absolute",
      width: "100%",
      height: "80%",
      zIndex: 10,
      backgroundColor: "#222",
      borderRadius: 30,
      transition: "all 1s",
      bottom: wysuwanie,
      overflow: "hidden",
    };
  };

  setTimeout(() => {}, 1000);

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <View style={styles.container}>
      <Animated.View style={contentStyle()}>
        <TouchableHighlight
          style={{ height: "40%", zIndex: 100 }}
          onPress={fadeOut}
        >
          <Image style={styles.image} source={require("./dom.jpg")} />
        </TouchableHighlight>
        <Text style={styles.naglowek}> Wieżowiec Burdż Chalifa </Text>
        <Text style={styles.tresc}>
          Wieżowiec Burdż Chalifa zaprojektowany został przez przedsiębiorstwo
          architektoniczne Skidmore, Owings and Merrill, które projektowało
          także budynki Willis Tower oraz 1 World Trade Center. Ogólny jego
          wygląd nawiązuje do kwiatu pustyni z rodzaju Hymenocallis[8] oraz
          architektury islamu (różne ornamenty). Budowla składa się z
          centralnego rdzenia oraz trzech „ramion”, które w miarę zwiększania
          się wysokości są coraz mniejsze, co nadaje jej smukłość. Na samym
          szczycie centralny rdzeń przechodzi w iglicę. Najniższe piętra
          przeznaczono na hotel, którego wystrojem zajął się Giorgio Armani.
        </Text>
        <Text style={styles.maintext}>{text} </Text>
      </Animated.View>
      <View style={styles.barcodebox}>
        <View style={styles.border}></View>
        <View style={styles.border1}></View>
        <View style={styles.border2}></View>
        <View style={styles.border3}></View>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext2}>Zeskanuj Kod</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    position: "absolute",
    bottom: 0,
    fontSize: 16,
    margin: 20,
    color: "white",
    opacity: 0.1,
  },
  maintext2: {
    position: "absolute",
    bottom: 0,
    fontSize: 16,
    margin: 20,
    color: "white",
    opacity: 0.3,
  },
  barcodebox: {
    position: "absolute",
    top: 270,
    alignItems: "center",
    justifyContent: "center",
    height: 220,
    width: 220,
    transform: [{ scale: 1.8 }],

    overflow: "hidden",
    borderRadius: 30,
  },
  border: {
    position: "absolute",
    width: 175,
    height: 175,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    opacity: 0.2,
  },
  border1: {
    position: "absolute",
    left: 35,
    top: 35,
    width: 55,
    height: 55,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 21,
    opacity: 0.07,
  },
  border2: {
    position: "absolute",
    right: 35,
    top: 35,
    width: 55,
    height: 55,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 21,
    opacity: 0.07,
  },
  border3: {
    position: "absolute",
    left: 35,
    bottom: 35,
    width: 55,
    height: 55,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 21,
    opacity: 0.07,
  },
  image: {
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
  naglowek: {
    top: 25,
    color: "white",
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
  },
  tresc: {
    top: 50,
    color: "#888",
    fontSize: 18,
    textAlign: "justify",
    marginLeft: 20,
    marginRight: 20,
  },
  btn: {
    zIndex: 100,
    position: "absolute",
    width: 10,
    height: 10,
  },
});
