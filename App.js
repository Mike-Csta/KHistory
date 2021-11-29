
import React, { useState, useEffect, useRef } from "react"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { Text, View, StyleSheet, Button, Animated, Image, TouchableHighlight } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"





export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState("Not yet scanned")
  const [type, setType] = useState("No Type")

  const askForCameraPermission = () => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }

  useEffect(() => {
    askForCameraPermission()
  }, [])

  const wysuwanie = useRef(new Animated.Value(-800)).current

  const fade = (value = 0) => {
    Animated.timing(wysuwanie, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start()
    if (value == -800) setScanned(false)
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    setText(data)
    setType(type)
    fade()
  }

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
    }
  }

  setTimeout(() => {}, 1000)

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    )
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={"Allow Camera"} onPress={() => askForCameraPermission()} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image4} source={require("./hlogo.png")} />
        <Text style={styles.header_text}>POZNAJ HISTORIE KALISZA</Text>
      </View>
      <Image style={styles.image5} source={require("./qlogo.png")} />
      <Text style={styles.zeskanuj_text}>

        <Text style={styles.zeskanuj_text_color}>Z</Text>ESKANUJ <Text style={styles.zeskanuj_text_color}>K</Text>OD
      </Text>

      <Image style={styles.image2} source={require("./kaliszTemplateLogo.png")} />
      <Image style={styles.image3} source={require("./kaliszMapa2.png")} />
      <Animated.View style={contentStyle()}>
        <TouchableHighlight style={{ height: "40%", zIndex: 100 }} onPress={() => fade(-800)}>
          <Image style={styles.image} source={require("./dom.jpg")} />
        </TouchableHighlight>
        <Text style={styles.naglowek}> Wieżowiec Burdż Chalifa </Text>
        <Text style={styles.tresc}>{text}</Text>
        <Text style={styles.maintext}>{type} </Text>
      </Animated.View>
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
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={{ aspectRatio: 0.5, width: "100%" }} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15161a",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    position: "absolute",
    bottom: 0,
    fontSize: RFValue(16, 1000),
    margin: 20,
    color: "white",
    opacity: 0.1,
  },
  zeskanuj_text: {
    position: "absolute",
    bottom: "27%",

    fontSize: RFValue(37, 1000),

    color: "#454545",
    letterSpacing: 5,
  },
  zeskanuj_text_color: {
    color: "#912D2A",
  },
  maintext2: {
    position: "absolute",
    bottom: 0,
    fontSize: RFValue(16, 1000),
    margin: 20,
    color: "white",
    opacity: 0.3,
  },
  header: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    top: "8.2%",
  },
  header_text: {
    // position: "absolute",
    top: "4.35%",
    color: "white",

    fontSize: RFValue(15, 1000),

    letterSpacing: 5,
    marginRight: "2.4%",
  },
  image4: {
    // position: "absolute",
    width: "13%",
    aspectRatio: 1,
    top: "0%",
    marginRight: "5%",
  },
  image5: {
    position: "absolute",
    width: "5%",
    height: "2.4%",
    // aspectRatio: 1,
    bottom: "22%",
    opacity: 0.123,
  },
  barcodebox: {
    position: "absolute",
    top: "27%",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
    width: "50%",
    transform: [{ scale: 1.8 }],
    borderRadius: 30,
    overflow: "hidden",
    borderRadius: 40,
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
  image2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.13,
  },
  image3: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: "0%",
  },

  naglowek: {
    top: 25,
    color: "white",
    fontSize: RFValue(30, 1000),
    justifyContent: "center",
    textAlign: "center",
  },
  tresc: {
    top: 50,
    color: "#888",
    fontSize: RFValue(18, 1000),
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
})
