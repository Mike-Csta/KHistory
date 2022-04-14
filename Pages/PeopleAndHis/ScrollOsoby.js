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
import grid from "../../src/grid.png";
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
          {props.osoby.map((e, index) =>
            index < 5 ? (
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
                <View
                  style={{
                    borderColor: "#333344",
                    borderWidth: 1.5,
                    marginLeft: responsiveNumber(5),
                    borderRadius: responsiveNumber(20),
                  }}
                >
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
            ) : (
              false
            )
          )}
          <View style={style.element2}>
            <TouchableWithoutFeedback
              onPress={() => props.navigation.push("Osoby_Page", [props.osoby])}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Image source={grid} style={style.obraz2} />
                <Text style={style.grid_text}>Więcej</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
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
    // backgroundColor: "#353540",
    backgroundColor: "#212938",
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
    // backgroundColor: "#353540",
    backgroundColor: "#212938",
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
  element2: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: "95%",
    width: responsiveNumber(80),
    borderRadius: responsiveNumber(20),
    backgroundColor: "#303547",
    margin: responsiveNumber(5),
  },
  grid_text: {
    position: "absolute",
    color: "white",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5.3),
    bottom: 0,
  },
  obraz: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#333344",
    borderWidth: 1.5,
    alignItems: "center",
    height: responsiveNumber(135),
    aspectRatio: 1,
    borderRadius: responsiveNumber(15),
    margin: responsiveNumber(10),
    marginBottom: responsiveNumber(0),
    marginLeft: responsiveNumber(5),
    marginRight: responsiveNumber(5),
  },
  obraz2: {
    flex: 0.6,
    justifyContent: "center",
    opacity: 0.8,
    alignItems: "center",
    height: responsiveNumber(135),
    aspectRatio: 1,
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
    height: responsiveNumber(130),
    // backgroundColor: "#353540",
    backgroundColor: "#212938",
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
    // backgroundColor: "#353540",
    backgroundColor: "#212938",
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
  element2: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: "95%",
    width: responsiveNumber(80),
    borderRadius: responsiveNumber(20),
    backgroundColor: "#303547",
    margin: responsiveNumber(5),
  },
  grid_text: {
    position: "absolute",
    color: "white",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5.3),
    bottom: 0,
  },
  obraz: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#333344",
    borderWidth: 1.5,
    alignItems: "center",
    height: responsiveNumber(135),
    aspectRatio: 1,
    borderRadius: responsiveNumber(15),
    margin: responsiveNumber(10),
    marginBottom: responsiveNumber(0),
    marginLeft: responsiveNumber(5),
    marginRight: responsiveNumber(5),
  },
  obraz2: {
    flex: 0.6,
    justifyContent: "center",
    opacity: 0.8,
    alignItems: "center",
    height: responsiveNumber(135),
    aspectRatio: 1,
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
  text: { color: "white", fontSize: PixelRatio.getPixelSizeForLayoutSize(3.7) },
});

let style = style1;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
//console.log(windowWidth, windowHeight);

if (windowHeight / windowWidth > 1.8) {
  // height: responsiveNumber(130) container
  style = style1;
} else {
  // height: responsiveNumber(180) container
  style = style2;
}

export default ScrollOsoby;
