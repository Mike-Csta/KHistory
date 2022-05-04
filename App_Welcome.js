import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  PixelRatio,
  TextInput,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from 'react-native-responsive-number'
import flagaPl from './src/pl.png'
import flagaUk from './src/uk.png'
const App_Welcome = (props) => {
  const [lock, setLock] = useState('false')

  const JsonDostep = async () => {
    let request = await fetch('http://khistory.pl/dostep.json', {
      cashe: 'no-store',
    })
    let json = await request.json()
    // setLock(json.dostep.lock);
  }
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`${key}`, jsonValue)
    } catch (e) {
      // saving error
    }
  }
  useEffect(() => {
    storeData('Lang', true)
  }, [])
  const [lang, setLang] = useState(true)

  //lock

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [zleHaslo, setZleHaslo] = useState('')
  const [data, setData] = useState(['falalala', 'falalala'])

  const Json = async () => {
    let request = await fetch('http://khistory.pl/login.json', {
      cashe: 'no-store',
    })
    let json = await request.json()
    setData([json.login.login, json.login.haslo])
  }

  useEffect(() => {
    JsonDostep()
    Json()
  }, [])

  const Autch = () => {
    if (login == data[0] && password == data[1]) {
      return props.navigation.navigate('Lock')
    } else {
      setZleHaslo('ZŁY LOGIN LUB HASLO')
    }
  }

  //lock end
  if (lock == 'false') {
    return (
      <View style={style.container}>
        <Text style={style.text}>
          {lang
            ? 'WITAJ W KHISTORY, WYBIERZ JĘZYK:'
            : 'Привіт, виберіть мову:'}
        </Text>
        <Text style={{ color: '#aaa', fontSize: 10, marginBottom: 20 }}>
          {!lang
            ? 'WITAJ W KHISTORY, WYBIERZ JĘZYK:'
            : 'Привіт, виберіть мову:'}
        </Text>
        <View style={style.flagi}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: lang ? '#123' : 'transparent',
              borderBottomColor: lang ? '#823' : 'transparent',
              borderBottomWidth: 3,
            }}
            onPress={() => storeData('Lang', true) && setLang(true)}
          >
            <Image source={flagaPl} style={style.image} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: !lang ? '#123' : 'transparent',
              borderBottomColor: !lang ? '#861' : 'transparent',
              borderBottomWidth: 3,
            }}
            onPress={() => storeData('Lang', false) && setLang(false)}
          >
            <Image source={flagaUk} style={style.image} />
          </TouchableOpacity>
        </View>
        <Text style={style.text}></Text>
        <TouchableOpacity
          onPress={() =>
            storeData('Welcome', true) && props.navigation.navigate('Home')
          }
          style={style.button}
        >
          <Text style={style.text5}>{lang ? 'zapisz' : 'зберегти'}</Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View style={loginStyle.container}>
        <Text style={loginStyle.text}>Zablokowano zdalnie</Text>
        <Text style={loginStyle.text2}>Poproś admina o dostęp</Text>
        <Text style={loginStyle.text}>LOGIN</Text>
        <TextInput
          style={loginStyle.textInput}
          value={login}
          onChangeText={(e) => setLogin(e)}
        />
        <Text style={loginStyle.text}>HASŁO</Text>
        <TextInput
          style={loginStyle.textInput}
          value={password}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity
          style={loginStyle.button}
          onPress={() => {
            Autch()
          }}
        >
          <Text
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',

              color: 'white',
              fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
              letterSpacing: responsiveLetterSpacing(300, 4.3),
              fontWeight: 'bold',
            }}
          >
            ZALOGUJ
          </Text>
        </TouchableOpacity>
        <Text style={loginStyle.error}>{zleHaslo}</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#051523',
    height: '100%',
    position: 'relative',
  },
  text: { color: 'white', fontSize: 20, marginBottom: 20 },
  flagi: {
    display: 'flex',

    height: '20%',
    flexDirection: 'row',
  },

  image: {
    height: 100,
    aspectRatio: 1.5,
    borderRadius: responsiveNumber(10),
  },
  button: {
    backgroundColor: '#293645',
    height: responsiveNumber(40),
    width: responsiveNumber(100),
    borderRadius: responsiveNumber(100),
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  text5: {
    color: 'white',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
    letterSpacing: responsiveLetterSpacing(300, 4.3),
    marginBottom: responsiveNumber(3),
  },
})

const loginStyle = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    // height: responsiveNumber(50),
    flex: 1,
    backgroundColor: '#212127',
    // bottom: getStatusBarHeight(),
  },
  text: {
    color: '#e55',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    letterSpacing: responsiveLetterSpacing(300, 4.3),
    fontWeight: 'bold',
  },
  text2: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 20,
    color: 'white',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    letterSpacing: responsiveLetterSpacing(300, 4.3),
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#414146',
    width: '90%',
    height: responsiveNumber(35),
    margin: responsiveNumber(20),
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: responsiveNumber(100),
  },
  button: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#303035',
    width: '30%',
    height: responsiveNumber(35),
    borderRadius: responsiveNumber(5),
  },
  error: {
    color: '#f33',
    marginTop: responsiveNumber(50),
    fontWeight: 'bold',
    fontSize: responsiveNumber(20),
  },
})

export default App_Welcome
