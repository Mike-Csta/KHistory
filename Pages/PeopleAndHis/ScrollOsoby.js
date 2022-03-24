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
  const osoby = [
    {
      imie: "Adam",
      nazwisko: "Asnyk",
      opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
      obraz:
        "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
    },
    {
      imie: "Mike",
      nazwisko: "Csta",
      opis: 'W 2019 roku Mike Csta rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
      obraz:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/275141980_1926253384233295_5951925321233891864_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5wMF8n6k7BkAX8XfAZQ&_nc_ht=scontent-waw1-1.xx&oh=00_AT93flJGiRhEy4gTxZvJszKEpRSgKemPTsoqB8CWWMxrIQ&oe=62418614",
    },
    {
      imie: "Adam",
      nazwisko: "Asnyk",
      opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
      obraz:
        "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
    },
    {
      imie: "Adam",
      nazwisko: "Asnyk",
      opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
      obraz:
        "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
    },
    {
      imie: "Adam",
      nazwisko: "Asnyk",
      opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
      obraz:
        "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
    },
    {
      imie: "Adam",
      nazwisko: "Asnyk",
      opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
      obraz:
        "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
    },
  ];

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
          {osoby.map((e) => (
            <TouchableWithoutFeedback
              style={style.element}
              onPress={() =>
                props.navigation.push("ScrollOsoby_Page", [
                  e.imie,
                  e.nazwisko,
                  e.obraz,
                  e.opis,
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
