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
  const [linkText, setLinkText] = useState("https://www.kalisz.pl");
  const [changeText, onChangeText] = useState("https://www.kalisz.pl");
  const [link, setLink] = useState("https://www.kalisz.pl/");
  const [index, setIndex] = useState(1);
  const [wlasnyLink, setWlasnyLink] = useState("");
  const [linki, setLinki] = useState([
    "https://www.kalisz.pl/",
    "https://www.google.pl/",
    "https://www.google.pl/",
    "https://www.google.pl/",
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
              "https://www.kalisz.pl",
              "https://www.google.pl/",
              "https://www.google.pl/",
              "https://www.google.pl/",
            ]
      );
      setLink(
        jsonValue != null ? JSON.parse(jsonValue)[0] : "https://www.kalisz.pl"
      );
    } catch (e) {
      // error reading value
    }
  };

  const zamiana = (index, nowyLink) => {
    let tab = linki;
    tab[index] = nowyLink;
    setLinki(tab);
    storeData("linki", tab);
    setLink(nowyLink);
  };
  const zamianaWlasna = (index, nowyLink) => {
    let https = nowyLink.slice(0, 8).toLowerCase();
    let http = nowyLink.slice(0, 7).toLowerCase();
    if (nowyLink == "") {
      ("");
    } else {
      if (https === "https://") {
        let tab = linki;
        tab[index] = nowyLink;
        setLinki(tab);
        storeData("linki", tab);
        setLink(nowyLink);
      } else if (http === "http://") {
        let tab = linki;
        tab[index] = nowyLink;
        setLinki(tab);
        storeData("linki", tab);
        setLink(nowyLink);
      } else {
        let tab = linki;
        tab[index] = "https://" + nowyLink;
        setLinki(tab);
        storeData("linki", tab);
        setLink("https://" + nowyLink);
      }
    }
  };

  const nowaKarta = (nowyLink) => {
    let tab = linki;
    tab.push("https://www.google.pl/");
    setLinki(tab);
    storeData("linki", tab);
    setLink("https://www.google.pl/");
    setIndex(tab.length - 1);
  };

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`${key}`, jsonValue);
    } catch (e) {
      // saving error
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
        {link == "https://www.google.pl/" ? (
          <View style={styles.container3}>
            <View style={styles.text_elem}>
              <Text style={styles.text3}>
                Dodaj swoją stronę z wiadomościami
              </Text>
            </View>
            <View style={styles.container3_group_wraper}>
              <View style={styles.container3_group}>
                <TextInput
                  style={styles.container3_group_item1}
                  placeholder="Podaj adres strony"
                  placeholderTextColor="#555555"
                  value={wlasnyLink}
                  onChangeText={(e) => setWlasnyLink(e)}
                />
                <View style={styles.container3_group_item2}>
                  <Text style={styles.text2}>Sugerowane</Text>
                </View>
                <TouchableOpacity
                  style={styles.container3_group_item}
                  onPress={() =>
                    zamiana(index, "https://kalisz.naszemiasto.pl/")
                  }
                >
                  <Text style={styles.text2}>kalisz.naszemiasto.pl</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.container3_group_item}
                  onPress={() => zamiana(index, "https://calisia.pl/")}
                >
                  <Text style={styles.text2}>calisia.pl</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.container3_group_item}
                  onPress={() => zamiana(index, "https://latarnikkaliski.pl/")}
                >
                  <Text style={styles.text2}>latarnikkaliski.pl</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.button_elem}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => zamianaWlasna(index, wlasnyLink)}
              >
                <Text style={styles.text3}>Zapisz</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
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
        )}
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
          <ScrollView
            style={styles.ScrollView}
            horizontal={true}
            // pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
          >
            {linki.map((e, index) => (
              <TouchableOpacity
                style={styles.bar_search}
                onPress={() => {
                  setLink(e);
                  setIndex(index);
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
            <TouchableOpacity
              style={styles.bar_search}
              onPress={() => {
                nowaKarta();
              }}
            >
              <View style={styles.bar_Icon}>
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
                  +
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  button_elem: {
    flex: 1,
    // justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    // marginTop: responsiveNumber(35),
    // marginBottom: responsiveNumber(100),
  },
  button: {
    backgroundColor: "#303030",
    height: responsiveNumber(35),
    width: responsiveNumber(87),
    textAlign: "center",
    justifyContent: "center",
    borderRadius: responsiveNumber(5),

    zIndex: 500,
  },

  container3_group: {
    backgroundColor: "#131313",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    width: "70%",
    height: responsiveNumber(240),
    borderRadius: responsiveNumber(10),
    overflow: "hidden",
  },
  container3_group_wraper: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: responsiveNumber(10),
    // overflow: "hidden",
    flex: 1.62,
    // height: responsiveNumber(330),
    width: "100%",
  },
  container3_group_item: {
    backgroundColor: "#252940",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    borderTopColor: "#151515",
    borderTopWidth: responsiveNumber(2),
    borderRadius: responsiveNumber(2),
  },
  container3_group_item1: {
    backgroundColor: "#303030",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    borderTopColor: "#151515",
    borderTopWidth: 2,
    marginBottom: responsiveNumber(30),
    borderRadius: responsiveNumber(10),
    color: "#fff",
    fontSize: responsiveNumber(18),
  },
  container3_group_item2: {
    backgroundColor: "#303030",
    flex: 0.5,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    borderTopColor: "#151515",
    borderTopWidth: 2,
    borderTopLeftRadius: responsiveNumber(10),
    borderTopRightRadius: responsiveNumber(10),
  },
  container3: {
    position: "relative",
    backgroundColor: "#131313",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    color: "#fff",
    fontSize: responsiveNumber(20),
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  text_elem: {
    color: "#fff",
    fontSize: responsiveNumber(20),
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flex: 0.7,

    // height: responsiveNumber(150),
    marginTop: responsiveNumber(40),
  },
  text2: {
    color: "#999",
    fontSize: responsiveNumber(15),
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  text3: {
    color: "#bbb",
    fontSize: responsiveNumber(20),
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
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
    // flex: 1,
    height: responsiveNumber(48),
    marginLeft: responsiveNumber(0.3),
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
    // flex: 5,
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    display: "flex",
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
