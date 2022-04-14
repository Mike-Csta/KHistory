import React, { useState, useEffect } from "react";
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
  StatusBar,
  TextInput,
} from "react-native";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const Zabytki_Page = (props) => {
  const [input, setInput] = useState("");
  // console.log();
  return (
    <View>
      <View style={style.container}>
        <View style={style.bar}>
          <View style={style.search}>
            <TextInput
              type="text"
              style={style.textInput}
              placeholder="Wyszukaj Osoby..."
              placeholderTextColor="#454560"
              value={input}
              onChangeText={(e) => setInput(e)}
            />
          </View>
          <FlatList
            contentContainerStyle={{ paddingBottom: 20 }}
            style={style.flatList}
            data={props.route.params[0].filter((e) =>
              e.nazwa.toLowerCase().includes(input.toLowerCase())
            )}
            numColumns={1}
            renderItem={(e) => (
              <TouchableOpacity
                style={style.element}
                onPress={() =>
                  props.navigation.push("Zabytki_Page_Page", e.item)
                }
              >
                <Image
                  source={{
                    uri: e.item.obraz,
                  }}
                  style={style.obraz}
                />
                <View style={style.textView}>
                  <Text style={style.text}>{`${e.item.nazwa}`}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
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
    height: Dimensions.get("window").height + StatusBar.currentHeight,
    overflow: "hidden",
    // paddingTop: responsiveNumber(10),
    zIndex: 2,
    flexDirection: "column",
    position: "relative",
  },

  flatList: {
    flex: 1,
    // margin: responsiveNumber(10),
  },
  search: {
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  bar: {
    // display: "flex",
    // justifyContent: "flex-end",
    // marginTop: StatusBar.currentHeight,
    bottom: 0,
    height: "100%",
  },
  textInput: {
    // position: "absolute",
    backgroundColor: "#242939",
    borderBottomWidth: 2,
    borderColor: "#353545",
    borderRadius: 50,
    height: responsiveNumber(35),
    width: "97%",
    borderRadius: responsiveNumber(7),
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: "white",
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

    borderColor: "#333344",
    borderWidth: 1.5,

    alignItems: "center",
    // height: responsiveNumber(135),
    width: "95%",
    // aspectRatio: 2,
    borderRadius: responsiveNumber(15),
    margin: responsiveNumber(10),
    marginBottom: responsiveNumber(0),
    marginLeft: responsiveNumber(5),
    marginRight: responsiveNumber(5),
  },
  textView: {
    flex: 0.25,
    // backgroundColor: "green",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    margin: 0,
  },
  text: {
    color: "white",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6.5),
    // fontWeight: "bold",
  },
});

export default Zabytki_Page;
