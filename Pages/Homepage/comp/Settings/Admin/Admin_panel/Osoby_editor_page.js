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
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from 'react-native-responsive-number'
const Osoby_editor_page = (props) => {
  let [osoby, setOsoby] = useState([
    {
      imie: 'wczytywanie1',
      nazwisko: 'wczytywanie2',
      mopis: 'wczytywanie3',
      opis: 'wczytywanie4',
      obraz:
        'https://ak.picdn.net/shutterstock/videos/1041501241/thumb/1.jpg',
    },
  ])

  let [imie, setImie] = useState('')
  let [nazwisko, setNazwisko] = useState('')
  let [mopis, setMopis] = useState('')
  let [opis, setOpis] = useState('')
  let [obraz, setObraz] = useState('')

  const Json = async () => {
    // let request = await fetch('http://192.168.8.126/www/osoby.json')
    let request = await fetch('http://khistory.pl/osoby.json')
    let json = await request.json()
    setOsoby(json.osoby)
    // console.log(json.osoby)
  }

  const getOsoby = (a) => {
    let test = osoby.filter((e) => `${e.imie} ${e.nazwisko}` != a)
    test.unshift({
      imie: imie,
      mopis: mopis,
      nazwisko: nazwisko,
      obraz: obraz,
      opis: opis,
    })
    return test
  }

  const getJson = () => {}

  const load = () => {
    setImie(props.route.params[0].imie)
    setNazwisko(props.route.params[0].nazwisko)
    setMopis(props.route.params[0].mopis)
    setOpis(props.route.params[0].opis)
    setObraz(props.route.params[0].obraz)
  }

  useEffect(() => {
    Json()
    load()
  }, [])

  return (
    <KeyboardAvoidingView style={style.container} behavior={'height'}>
      <ScrollView style={style.scroll}>
        {/* poczatek obraz z polem */}
        <View>
          {/* obraz */}
          <View style={style.viewImg}>
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
        <View>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              fetch('http://khistory.pl/osoby.php', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'charset': 'utf-8',
                },
                body: JSON.stringify(getOsoby(imie + ' ' + nazwisko)),
              })
            }}
          >
            <Text>TEST</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  viewImg: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  img: {
    height: responsiveNumber(250),
    aspectRatio: 1,
    borderRadius: responsiveNumber(2000),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    marginTop: StatusBar.currentHeight,
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
  button: {
    width: '100%',
    height: responsiveNumber(2000),
    backgroundColor: 'white',
  },
})

export default Osoby_editor_page
