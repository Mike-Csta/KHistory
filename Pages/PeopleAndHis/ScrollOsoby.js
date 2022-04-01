import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  PixelRatio,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const ScrollOsoby = (props) => {
  return (
    <View>
      <View style={style.borderRadius}></View>
      <View style={style.container}>
        <ScrollView
          style={style.scrollView}
          horizontal={true}
          // pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
        >
          {props.osoby.map((e) => (
            <TouchableWithoutFeedback
              style={style.element}
              onPress={() =>
                props.navigation.push("ScrollOsoby_Page", [
                  e.imie,
                  e.nazwisko,
                  e.mopis,
                  e.opis,
                  e.obraz,
                ])
              }
            >
              <View>
                <Image
                  source={{
                    uri: e.obraz,
                  }}
                  style={style.obraz}
                />
                <View style={style.textView}>
                  <Text style={style.text}>{`${e.imie} ${e.nazwisko}`}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const style1 = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: responsiveNumber(180),
    backgroundColor: "#353540",
    borderBottomLeftRadius: responsiveNumber(25),
    borderBottomRightRadius: responsiveNumber(25),
    overflow: "hidden",
    // paddingTop: responsiveNumber(10),
    zIndex: 2,
  },
  borderRadius: {
    zIndex: -10,
    position: "absolute",
    display: "flex",
    width: "100%",
    height: responsiveNumber(40),
    backgroundColor: "#353540",
    borderBottomLeftRadius: responsiveNumber(25),
    overflow: "hidden",
    paddingTop: responsiveNumber(10),

    marginTop: responsiveNumber(-20),
  },
  scrollView: {
    // margin: responsiveNumber(10),
    position: "relative",
  },
  element: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: "100%",
    width: responsiveNumber(150),
    // backgroundColor: "#f55",
    margin: responsiveNumber(1),
  },
  obraz: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: responsiveNumber(135),
    aspectRatio: 1,
    borderRadius: responsiveNumber(15),
    margin: responsiveNumber(10),
    marginBottom: responsiveNumber(0),
    marginLeft: responsiveNumber(5),
    marginRight: responsiveNumber(5),
  },
  textView: {
    flex: 0.2,
    // backgroundColor: "green",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    margin: 0,
  },
  text: { color: "white", fontSize: PixelRatio.getPixelSizeForLayoutSize(5.3) },
});

const style2 = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: responsiveNumber(140),
    backgroundColor: "#353540",
    borderBottomLeftRadius: responsiveNumber(25),
  },
  scrollView: {
    // margin: responsiveNumber(10),
    position: "relative",
  },
  element: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: "100%",
    width: responsiveNumber(120),
    // backgroundColor: "#f55",
    margin: responsiveNumber(1),
  },
  obraz: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: responsiveNumber(135),
    aspectRatio: 1,
    borderRadius: responsiveNumber(15),
    margin: responsiveNumber(10),
    marginBottom: responsiveNumber(0),
  },
  textView: {
    flex: 0.2,
    // backgroundColor: "green",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    margin: 0,
  },
  text: { color: "white", fontSize: PixelRatio.getPixelSizeForLayoutSize(5.3) },
});

let style = style1;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowWidth, windowHeight);

if (windowHeight / windowWidth > 1.8) {
  // height: responsiveNumber(130) container
  style = style1;
} else {
  // height: responsiveNumber(180) container
  style = style2;
}

export default ScrollOsoby;
