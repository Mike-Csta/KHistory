import React, { useEffect, useState, useRef } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import icon from "../../../../src/news.png";
import tlobus from "../../../../src/tlowiadom.png";
import search from "../../../../src/search.png";
import leftArrow from "../../../../src/left-arrow.png";
import rightArrow from "../../../../src/right-arrow.png";
import LinkPreview from "react-native-link-preview";
import { WebView } from "react-native-webview";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ScrollView } from "react-native-gesture-handler";
const Web = () => {
  const jsCode = ``;

  //<loading
  const wysuwanie = useRef(new Animated.Value(0)).current;
  const fade = (value = 1) => {
    Animated.timing(wysuwanie, {
      toValue: value,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const wysuwanie2 = useRef(new Animated.Value(0)).current;
  const fade8 = (value = 1) => {
    Animated.timing(wysuwanie2, {
      toValue: value,
      duration: 70,
      useNativeDriver: false,
    }).start();
  };

  const indeks = useRef(new Animated.Value(-100)).current;
  const fade7 = (value = 49) => {
    Animated.timing(indeks, {
      toValue: value,
      duration: 2,
      useNativeDriver: false,
    }).start();
  };
  const contentStyle = function () {
    return {
      marginTop: getStatusBarHeight(),
      width: "100%",
      height: Dimensions.get("window").height - responsiveNumber(70),
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
      flexDirection: "column",
      opacity: wysuwanie,
      zIndex: indeks,
    };
  };

  const bar_container = function () {
    return {
      position: "absolute",
      width: "100%",
      height: responsiveNumber(70),

      bottom: 0,
      zIndex: 1001,
      display: "flex",
      flexDirection: "column",
      opacity: wysuwanie2,
      zIndex: indeks,
    };
  };
  //>loading

  //<pojawianie logo
  const pojawianie = useRef(new Animated.Value(100)).current;
  const fade2 = (value = 0) => {
    Animated.timing(pojawianie, {
      toValue: value,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const fade5 = (value = -100) => {
    Animated.timing(pojawianie, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const opacity = useRef(new Animated.Value(0)).current;
  const fade3 = (value = 0.7) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  const fade6 = (value = 0) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const contentStyle2 = function () {
    return {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      opacity: opacity,
      marginTop: pojawianie,
    };
  };

  //>pojawianie logo

  //<background_Rotate
  const rotate = new Animated.Value(0);

  Animated.timing(rotate, {
    toValue: 1,
    duration: 1000,
    Easing,
    useNativeDriver: false,
  }).start();

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["165deg", "240deg"],
  });

  const opacity2 = useRef(new Animated.Value(1)).current;
  const fade4 = (value = 0) => {
    Animated.timing(opacity2, {
      toValue: value,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const contentStyle3 = function () {
    return {
      // rotation: rotate,
      transform: [
        { translateX: -1000 },
        { translateY: -850 },
        { scale: 0.7 },
        { rotate: spin },
      ],
      opacity: opacity2,
      zIndex: 52,
    };
  };
  //>background_Rotate

  useEffect(() => {
    setTimeout(() => {
      fade();
    }, 1120);
    setTimeout(() => {
      fade3();
    }, 200);
    setTimeout(() => {
      fade4();
    }, 1100);
    setTimeout(() => {
      fade5();
    }, 1000);
    setTimeout(() => {
      fade6();
    }, 1000);
    setTimeout(() => {
      fade7();
    }, 1500);
    setTimeout(() => {
      fade8();
    }, 600);
    fade2();
    // fade4();
  }, []);
  const webViewRef = useRef(null);
  let godzina = new Date().getHours();
  let minuta = new Date().getMinutes();
  const [tajm, setTajm] = useState(
    `${godzina}:${minuta < 10 ? "0" + minuta : minuta}`
  );

  const goback = () => {
    webViewRef.current.goBack();
  };

  const goforward = () => {
    webViewRef.current.goForward();
  };

  setInterval(() => {
    setTajm(`${godzina}:${minuta < 10 ? "0" + minuta : minuta}`);
  }, 5000);
  const [linkText, setLinkText] = useState("https://kalisz.naszemiasto.pl/");
  const [changeText, onChangeText] = useState("https://kalisz.naszemiasto.pl/");
  const [link, setLink] = useState("https://kalisz.naszemiasto.pl/");
  const [linki, setLinki] = useState([
    "https://kalisz.naszemiasto.pl/",
    "https://www.faktykaliskie.info/",
    "https://zyciekalisza.pl/wiadomosci",
    "https://calisia.pl/",
  ]);

  const onSearch = () => {
    setLink(changeText);
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("linki");
      setLinki(
        jsonValue != null
          ? JSON.parse(jsonValue)
          : [
              "https://kalisz.naszemiasto.pl/",
              "https://www.faktykaliskie.info/",
              "https://zyciekalisza.pl/wiadomosci",
              "https://calisia.pl/",
            ]
      );
      setLink(
        jsonValue != null
          ? JSON.parse(jsonValue)[0]
          : "https://kalisz.naszemiasto.pl/"
      );
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.loading_tlo_container}>
        <Animated.Image style={contentStyle3()} source={tlobus} />
      </Animated.View>
      <Animated.View style={contentStyle2()}>
        <Image style={styles.loading_icon} source={icon} />
      </Animated.View>
      <Animated.View style={contentStyle()}>
        <WebView
          style={styles.container2}
          source={{ uri: link }}
          ref={webViewRef}
          originWhitelist={["*"]}
          javaScriptEnabledAndroid={true}
          injectedJavaScript={jsCode}
          scalesPageToFit={false}
          userAgent="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36"
        />
      </Animated.View>
      <TouchableOpacity style={styles.bar_back} onPress={goback}>
        <View style={styles.bar_back2}>
          <Image
            source={leftArrow}
            style={{
              height: responsiveNumber(25),
              aspectRatio: 1,
              opacity: 0.4,
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bar_forwards} onPress={goforward}>
        <View style={styles.bar_forwards2}>
          <Image
            source={rightArrow}
            style={{
              height: responsiveNumber(25),
              aspectRatio: 1,
              opacity: 0.4,
            }}
          />
        </View>
      </TouchableOpacity>
      <Animated.View style={bar_container()}>
        <View style={styles.bar_top2}>
          <Text style={{ color: "#888" }}>{link}</Text>
        </View>
        <View style={styles.bar_top}>
          <View
            style={styles.ScrollView}
            // horizontal={true}
            // // pagingEnabled={true}
            // showsHorizontalScrollIndicator={false}
            // decelerationRate="fast"
          >
            {linki.map((e, index) => (
              <TouchableOpacity
                style={styles.bar_search}
                onPress={() => {
                  setLink(e);
                }}
              >
                <View style={styles.bar_Icon}>
                  <View
                    style={{
                      position: "absolute",
                      overflow: "hidden",
                      height: responsiveNumber(7),
                      width: "100%",
                      bottom: 0,
                    }}
                  >
                    <Image
                      style={{
                        // position: "absolute",
                        zIndex: -300,
                        height: 5000,
                        aspectRatio: 1,
                        right: 3000,
                        top: -2000,
                        opacity: 0.5,
                      }}
                      source={{
                        uri:
                          "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
                          e,
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: "#bbb",
                      zIndex: 1000,
                      fontSize: responsiveNumber(20),
                      position: "absolute",

                      marginLeft: responsiveNumber(20),
                      marginRight: responsiveNumber(20),
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    {index + 1}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  bar_back: {
    backgroundColor: "#15151590",
    // flex: 0.15,
    borderRadius: responsiveNumber(10),
    height: responsiveNumber(40),
    aspectRatio: 1,
    left: responsiveNumber(4),
    bottom: responsiveNumber(73),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    zIndex: 200,
  },
  bar: {
    backgroundColor: "#151515",
    flex: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bar_top2: {
    backgroundColor: "#151515",
    flex: 0.4,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bar_top: {
    backgroundColor: "#151515",
    flex: 1,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bar_input: {
    backgroundColor: "#202020",
    // paddingRight: responsiveNumber(80),
    // paddingLeft: responsiveNumber(80),
    borderRadius: responsiveNumber(30),
  },
  bar_search: {
    backgroundColor: "#151515",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  bar_forwards: {
    backgroundColor: "#15151590",
    // flex: 0.15,
    borderRadius: responsiveNumber(10),
    height: responsiveNumber(40),
    aspectRatio: 1,
    right: responsiveNumber(4),
    bottom: responsiveNumber(73),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    zIndex: 200,
  },
  loading_icon: {
    height: responsiveNumber(150),
    aspectRatio: 1,
    marginTop: 0,
  },
  ScrollView: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
  },
  loading_tlo_container: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#121212",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    flexDirection: "column",
  },
  margin: {},
  container2: {
    // aspectRatio: 1,
  },
  bar_Icon: {
    position: "relative",
    backgroundColor: "#242424",
    overflow: "hidden",
    borderRadius: responsiveNumber(6),
    aspectRatio: 2,
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: responsiveNumber(5),
    marginLeft: responsiveNumber(1.2),
    marginRight: responsiveNumber(1.2),
  },
});

// if (windowHeight / windowWidth > 1.8) {
//   styles = styles1;
// } else {
//   styles = styles1;
// }

export default Web;
