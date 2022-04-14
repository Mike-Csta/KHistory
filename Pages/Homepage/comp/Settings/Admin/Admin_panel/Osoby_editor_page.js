import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native'
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from 'react-native-responsive-number'
const Osoby_editor_page = (props) => {
  let [osoba, setOsoba] = useState({
    imie: 'wczytywanie1',
    nazwisko: 'wczytywanie2',
    mopis: 'wczytywanie3',
    opis: 'wczytywanie4',
    obraz:
      'https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg',
  })

  let [imie, setImie] = useState('')
  let [nazwisko, setNazwisko] = useState('')
  let [mopis, setMopis] = useState('')
  let [opis, setOpis] = useState('')
  let [obraz, setObraz] = useState('')

  const load = () => {
    setImie(props.route.params[0].imie)
    setNazwisko(props.route.params[0].nazwisko)
    setMopis(props.route.params[0].mopis)
    setOpis(props.route.params[0].opis)
    setObraz(props.route.params[0].obraz)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <View style={style.container}>
      <ScrollView style={style.scroll}>
        {/* poczatek obraz z polem */}
        <View>
          {/* obraz */}
          <View>
            <Image
              style={style.img}
              source={{ uri: props.route.params[0].obraz }}
            />
          </View>
          {/* pole */}
          <View>
            <TextInput
              style={style.textInput}
              value={obraz}
              multiline={true}
              onChangeText={(text) => setObraz(text)}
            ></TextInput>
          </View>
          {/* koniec obrazu z polem */}
          <View>
            <TextInput
              style={style.textInput}
              value={imie}
              onChangeText={(text) => setImie(text)}
            ></TextInput>
          </View>
          <View>
            <TextInput
              style={style.textInput}
              value={nazwisko}
              onChangeText={(text) => setNazwisko(text)}
            ></TextInput>
          </View>
          <View>
            <TextInput
              style={style.textInput}
              value={mopis}
              onChangeText={(text) => setMopis(text)}
              multiline={true}
            ></TextInput>
          </View>
          <View>
            <TextInput
              style={style.textInput}
              value={opis}
              onChangeText={(text) => setOpis(text)}
              multiline={true}
            ></TextInput>
          </View>
        </View>
        {/*  */}
        <View></View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: Dimensions.get('window').height + StatusBar.currentHeight,
    backgroundColor: '#242730',
    // bottom: getStatusBarHeight(),
  },
  img: {
    height: responsiveNumber(250),
    aspectRatio: 1,
    borderRadius: responsiveNumber(2000),
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  scroll: {
    height: '200%',
  },
  textInput: {
    backgroundColor: '#414146',
    width: '90%',
    minHeight: responsiveNumber(35),
    // maxHeight: responsiveNumber(200),
    // height: responsiveNumber(350),
    margin: responsiveNumber(20),
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
})

export default Osoby_editor_page
