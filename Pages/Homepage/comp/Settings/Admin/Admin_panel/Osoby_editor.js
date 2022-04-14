import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  PixelRatio,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
} from 'react-native'
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from 'react-native-responsive-number'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import notepad from '../../../../../../src/notepad.png'
import trash from '../../../../../../src/trash.png'

const Cytat_Editor = (props) => {
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

  const Json = async () => {
    let request = await fetch('http://192.168.8.126/www/osoby.json')
    // let request = await fetch("http://khistory.pl/osoby.json");
    let json = await request.json()
    setOsoby(json.osoby)
    console.log(json.osoby)
  }

  const getOsoby = (a) => {
    let test = osoby.filter((e) => `${e.imie} ${e.nazwisko}` != a)
    return test
  }

  useEffect(() => {
    Json()
  }, [])

  return (
    <View style={style.container}>
      <View style={style.panel}>
        <Text style={style.text}>Postacie Historyczne</Text>
      </View>
      <ScrollView style={style.scroll}>
        {osoby.map((e) => (
          //   <TouchableWithoutFeedback style={style.button}>
          <View style={style.button}>
            <View style={style.left}>
              {/* obrazek */}
              <Image
                source={{
                  uri: e.obraz,
                }}
                style={style.obraz}
              />
            </View>
            <View style={style.right}>
              {/* Imię nazwisko */}
              <View style={style.rightTop}>
                <Text style={style.text}>{`${e.imie} ${e.nazwisko}`}</Text>
              </View>
              {/* Przyciski */}
              <View style={style.rightBottom}>
                {/* Edytuj */}
                <TouchableOpacity
                  style={style.rightBottomLeft}
                  onPress={() => {
                    props.navigation.push('Osoby_editor_page', [e, osoby])
                  }}
                >
                  <View style={style.left}>
                    <Image
                      source={notepad}
                      style={style.iconNotepad}
                    ></Image>
                  </View>
                  <View style={style.right}>
                    <View style={style.rightTop}>
                      <Text style={style.text}>EDYTUJ</Text>
                    </View>
                    {/* <View style={style.rightBottom}></View> */}
                  </View>
                </TouchableOpacity>
                {/* Usuń */}
                <TouchableOpacity
                  style={style.rightBottomRight}
                  onPress={() => {
                    fetch('http://192.168.8.126/www/json.php', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'charset': 'utf-8',
                      },
                      body: JSON.stringify(
                        getOsoby(e.imie + ' ' + e.nazwisko),
                      ),
                    })
                  }}
                >
                  <Image source={trash} style={style.iconTrash}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          //   </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    // position: 'relative',
    display: 'flex',
    width: '100%',
    height: Dimensions.get('window').height + StatusBar.currentHeight,

    // justifyContent: 'center',
    // textAlign: 'center',
    // alignItems: 'center',
    // height: responsiveNumber(50),

    backgroundColor: '#242730',
    // bottom: getStatusBarHeight(),
  },
  scroll: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#242730',
  },
  left: {
    flex: 0.7,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    // backgroundColor: 'red',
  },
  rightTop: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  rightBottom: {
    flex: 1,
    // backgroundColor: 'purple',
    flexDirection: 'row',
  },
  rightBottomRight: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flex: 0.5,
    backgroundColor: '#bb474d',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginRight: responsiveNumber(13),
  },
  rightBottomLeft: {
    flex: 1,
    // backgroundColor: 'purple',
    backgroundColor: '#5a5c73',
    borderTopLeftRadius: responsiveNumber(25),
    borderTopRightRadius: responsiveNumber(25),
    marginRight: responsiveNumber(10),
    flexDirection: 'row',
  },
  iconNotepad: {
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    aspectRatio: 1,
    // backgroundColor: 'red',
    height: responsiveNumber(40),
    margin: responsiveNumber(15),
    // marginBottom: responsiveNumber(),
    marginLeft: responsiveNumber(20),
    marginRight: responsiveNumber(5),
  },
  iconTrash: {
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    aspectRatio: 1,
    // backgroundColor: 'red',
    height: responsiveNumber(40),
    margin: responsiveNumber(10),
    // marginBottom: responsiveNumber(),
    marginLeft: responsiveNumber(5),
    marginRight: responsiveNumber(5),
  },
  button: {
    marginTop: responsiveNumber(7.5),
    marginBottom: responsiveNumber(7.5),
    marginRight: responsiveNumber(10),
    marginLeft: responsiveNumber(10),
    height: responsiveNumber(150),
    zIndex: 1000,
    backgroundColor: '#3a3c50',
    // justifyContent: 'center',
    // textAlign: 'center',
    // alignItems: 'center',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  panel: {
    marginTop: StatusBar.currentHeight,
    width: '100%',
    height: responsiveNumber(50),
    backgroundColor: '#242730',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  obraz: {
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    height: responsiveNumber(130),
    aspectRatio: 1,
    borderRadius: responsiveNumber(15),
    margin: responsiveNumber(10),
    // marginBottom: responsiveNumber(),
    marginLeft: responsiveNumber(5),
    marginRight: responsiveNumber(5),
  },
  text: {
    color: 'white',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4.3),
    letterSpacing: responsiveLetterSpacing(300, 4.3),
  },
})

export default Cytat_Editor
