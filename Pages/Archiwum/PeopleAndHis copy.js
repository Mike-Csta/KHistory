import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import CytatHis from "../PeopleAndHis/CytatHis";
import Button from "../PeopleAndHis/Button";
import ScrollOsoby from "../PeopleAndHis/ScrollOsoby";
import ScrollZabytki from "../PeopleAndHis/ScrollZabytki";
import Footer from "../PeopleAndHis/Footer";
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from "react-native-responsive-number";

const PeopleAndHis = ({ navigation }) => {
  const Json = async () => {
    let request = await fetch("http://khistory.pl/osoby.json");
    let json = await request.json();
    // console.log(json.osoby[0]);
    // console.log(json.osoby[1]);
    // console.log(json.osoby[2]);
    setOsoby(json.osoby);
  };

  const [osoby, setOsoby] = useState([
    {
      imie: "wczytywanie1",
      nazwisko: "wczytywanie2",
      mopis: "wczytywanie3",
      opis: "wczytywanie4",
      obraz: "https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg",
    },
  ]);
  useEffect(() => {
    // setOsoby(Json());
    Json();
  }, []);

  // const osoby = [
  //   {
  //     imie: "Adam",
  //     nazwisko: "Asnyk",
  //     opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
  //     obraz:
  //       "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
  //   },
  //   {
  //     imie: "Mike",
  //     nazwisko: "Csta",
  //     opis: 'W 2019 roku Mike Csta rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
  //     obraz:
  //       "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/275141980_1926253384233295_5951925321233891864_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5wMF8n6k7BkAX8XfAZQ&_nc_ht=scontent-waw1-1.xx&oh=00_AT93flJGiRhEy4gTxZvJszKEpRSgKemPTsoqB8CWWMxrIQ&oe=62418614",
  //   },
  //   {
  //     imie: "Adam",
  //     nazwisko: "Asnyk",
  //     opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
  //     obraz:
  //       "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
  //   },
  //   {
  //     imie: "Adam",
  //     nazwisko: "Asnyk",
  //     opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
  //     obraz:
  //       "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
  //   },
  //   {
  //     imie: "Adam",
  //     nazwisko: "Asnyk",
  //     opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
  //     obraz:
  //       "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
  //   },
  //   {
  //     imie: "Adam",
  //     nazwisko: "Asnyk",
  //     opis: 'W 1849 roku Adam Asnyk rozpoczął naukę w Wyższej Szkole Realnej w Kaliszu, późniejszym Liceum im. Adama Asnyka. W 1856 roku pobierał nauki w Instytucie Gospodarstwa Wiejskiego i Leśnictwa w Marymoncie. Rok później podjął studia na Akademii Medyko-Chirurgicznej w Warszawie. W wyniku prowadzonym przez władze carskie, represjom wobec stowarzyszeń studenckich, Adam Asnyk przeniósł się do Wrocławia gdzie kontynuował studia medyczne na tamtejszych uczelniach wyższych. W tym samym czasie działał w Towarzystwie Literacko-Słowiańskim. Powrócił do Warszawy a w 1860 roku został aresztowany i osadzony w więzieniu w Cytadeli Warszawskiej. Jeszcze w tym samym roku został uwolniony. Udał się do Paryża a następnie do Heidelbergu gdzie rozpoczął studia humanistyczne. Do Warszawy powrócił w 1862 roku, gdy wybuchło powstanie styczniowe, Został członkiem tzw. Wrześniowego Rządu Narodowego. Po jego rozwiązaniu, wstąpił w szeregi wojsk powstańczych. Po klęsce powstania powrócił do Heidelbergu w 1864 roku i dokończył rozpoczęte tam studia. W 1866 roku uzyskał doktorat z filozofii na tamtejszym Uniwersytecie Ruprechta i Karola. Poetycki debiut Asnyka nastąpił w 1864 roku. Jego wiersz „Podróżni” został wówczas opublikowany na łamach Dziennika Literackiego. Z kolei w 1870 jego słynny wiersz „Rodzinnemu miastu” ukazał się w dzienniku Kaliszanin. W 1867 roku zamieszkał we Lwowie a trzy lata później przeniósł się do Krakowa gdzie mieszkał aż do śmierci. Asnyk aktywnie działał w polityce. Był radnym miejskim Krakowa, posłem na sejm galicyjski, a także współorganizatorem Towarzystwa Szkoły Ludowej. Od 1882 roku był członkiem redakcji dziennika "Reform", który w 1883 przyjął nazwę "Nowa Reforma". W 1889 roku został jego redaktorem naczelnym. Zmarł 2 sierpnia 1897 roku w Krakowie. Mieszkańcy Kalisza uhonorowali znamienitego poetę nazywając jego imieniem jedną z ulic, bibliotekę miejską oraz szkołę znaną dzisiaj jako I LO. im. Adama Asnyka.',
  //     obraz:
  //       "https://www.kalisz.pl/storage/image/core_files/2018/7/2/4e8a57f412256484aeacecc36186f179/umkalisz/list/aasnyk.jpg",
  //   },
  // ];
  return (
    <View style={style.container}>
      <View style={style.bar}>
        <View style={style.top}>
          <CytatHis />
          <Button value={"POSTACIE"} />
          <ScrollOsoby navigation={navigation} osoby={osoby} />
          <Button value={"ZABYTKI"} />
          <ScrollZabytki />
        </View>
        <View style={style.bottom}>
          <Footer />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    width: "100%",
    backgroundColor: "#212127",
    height: Dimensions.get("window").height + StatusBar.currentHeight,
  },
  bar: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: StatusBar.currentHeight,
    height: "100%",
  },
  top: { flex: 1, justifyContent: "space-between" },
  bottom: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 0.1,
    marginBottom: responsiveNumber(40),
  },
});

export default PeopleAndHis;
