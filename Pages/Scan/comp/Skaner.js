import React, { useState, useEffect, useRef } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { WebView } from "react-native-webview";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Animated,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
const Skaner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [type, setType] = useState("No Type");
  // const [link, setLink] = useState("No Type");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    setTimeout(() => {
      askForCameraPermission();
    }, 300);
  }, []);

  const wysuwanie = useRef(new Animated.Value(-800)).current;

  const fade = (value = 0) => {
    Animated.timing(wysuwanie, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start();
    if (value == -800) setScanned(false);
  };
  const contentStyle = function () {
    return {
      position: "absolute",
      width: "100%",
      height: "80%",
      zIndex: 10,
      backgroundColor: "#202330",
      borderRadius: 30,
      transition: "all 1s",
      bottom: wysuwanie,
      overflow: "hidden",
    };
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    getJson(data);
    setType(type);
    fade();
  };

  const [kod, setKod] = useState({
    obraz:
      "https://d-art.ppstatic.pl/kadry/k/r/18/fa/4d6263fb8c646_o_large.jpg",
    nazwa: "brak nazwy",
    opis: "brak opisu",
    źródło: "brak",
  });
  const getJson = async (link) => {
    let response = await fetch("http://khistory.pl/kody.json", {
      cache: "no-store",
    });
    let json = await response.json();
    setKod(undefined != json[link] ? json[link] : kod);
  };

  useEffect(() => {}, []);

  if (hasPermission === null) {
    return (
      <View style={styles.req}>
        <Text style={{ color: "white" }}></Text>
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

  return (
    <>
      <View style={styles.barcodebox_container}>
        <View style={styles.barcodebox}>
          <View style={styles.border}></View>
          <View style={styles.border1}>
            <View style={styles.border1s}></View>
          </View>
          <View style={styles.border2}>
            <View style={styles.border2s}></View>
          </View>
          <View style={styles.border3}>
            <View style={styles.border3s}></View>
          </View>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ aspectRatio: 0.5, width: "100%" }}
          />
        </View>
      </View>

      {/* rozwijana lista */}

      <Animated.View style={contentStyle()}>
        <TouchableHighlight
          style={{ height: "40%", zIndex: 100 }}
          onPress={() => fade(-800)}
        >
          <Image style={styles.image} source={{ uri: kod.obraz }} />
        </TouchableHighlight>
        <Text style={styles.naglowek}>{kod.nazwa}</Text>
        <ScrollView
          style={{
            zIndex: 10000,

            // top: 50,
            bottom: 0,
          }}
        >
          <Text style={styles.tresc}>{`${kod.opis}`}</Text>
          <Text style={styles.tresc}>{`Źródło: ${kod.zrodlo}`}</Text>
        </ScrollView>
        <Text style={styles.maintext}>{type} </Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  barcodebox_container: {
    zIndex: 3,
  },
  req: {
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
    width: "92%",
    borderRadius: 30,
    overflow: "hidden",
    borderRadius: 40,
    backgroundColor: "#111",
    zIndex: 3,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
    width: "92%",
    borderRadius: 30,
    overflow: "hidden",
    borderRadius: 40,
  },
  maintext: {
    position: "absolute",
    bottom: 0,
    fontSize: RFValue(16, 1000),
    margin: 20,
    color: "white",
    opacity: 0.1,
  },
  border: {
    position: "absolute",
    width: "87%",
    aspectRatio: 1,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 35,
    opacity: 0.2,
  },
  border1: {
    position: "absolute",
    left: "14%",
    top: "14%",
    width: "26%",
    aspectRatio: 1,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    opacity: 0.07,
  },
  border2: {
    position: "absolute",
    right: "14%",
    top: "14%",
    width: "26%",
    aspectRatio: 1,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    opacity: 0.07,
  },
  border3: {
    position: "absolute",
    left: "14%",
    bottom: "14%",
    width: "26%",
    aspectRatio: 1,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    opacity: 0.07,
  },
  border1s: {
    position: "absolute",
    left: "16%",
    top: "16%",
    width: "66%",
    aspectRatio: 1,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 11,
    opacity: 0.4,
  },
  border2s: {
    position: "absolute",
    right: "17%",
    top: "16%",
    width: "66%",
    aspectRatio: 1,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 11,
    opacity: 0.4,
  },
  border3s: {
    position: "absolute",
    left: "16%",
    bottom: "17%",
    width: "66%",
    aspectRatio: 1,
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 11,
    opacity: 0.4,
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
    fontSize: RFValue(40, 1000),
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#222430",
    zIndex: 20000,
  },
  tresc: {
    top: 50,
    color: "#889",
    fontSize: RFValue(25, 1000),
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
  },
});

export default Skaner;
