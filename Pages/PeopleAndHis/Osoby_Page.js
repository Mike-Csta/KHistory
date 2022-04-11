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
  FlatList,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const Osoby_Page = (props) => {
  return (
    <View>
      <View style={style.borderRadius}></View>
      <View style={style.container}>
        <FlatList
          data={props.route.params[0]}
          columnWrapperStyle={{
            flex: 0.5,
            justifyContent: "space-evenly",
          }}
          numColumns={2}
          renderItem={(e) => (
            <View style={style.element}>
              <Image
                source={{
                  uri: e.item.obraz,
                }}
                style={style.obraz}
              />
              <View style={style.textView}>
                <Text
                  style={style.text}
                >{`${e.item.imie} ${e.item.nazwisko}`}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    // height: responsiveNumber(180),
    // backgroundColor: "#353540",
    backgroundColor: "#192029",
    borderBottomLeftRadius: responsiveNumber(25),
    borderBottomRightRadius: responsiveNumber(25),
    overflow: "hidden",
    // paddingTop: responsiveNumber(10),
    zIndex: 2,
    flexDirection: "row",
  },
  borderRadius: {
    zIndex: -10,
    position: "absolute",
    display: "flex",
    width: "100%",
    height: responsiveNumber(40),
    // backgroundColor: "#353540",
    backgroundColor: "#192029",
    borderBottomLeftRadius: responsiveNumber(25),
    overflow: "hidden",
    paddingTop: responsiveNumber(10),

    marginTop: responsiveNumber(-20),
  },
  scrollView: {
    // margin: responsiveNumber(10),
    position: "relative",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "green",
    width: "100%",
    height: "auto",
  },
  element: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#243040",
    margin: responsiveNumber(5),
    borderRadius: responsiveNumber(15),
    height: responsiveNumber(200),
    // width: "50%",
    flexDirection: "column",
  },
  obraz: {
    flex: 1,
    justifyContent: "center",

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

export default Osoby_Page;
