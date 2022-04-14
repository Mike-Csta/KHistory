import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  PixelRatio,
  TouchableOpacity,
} from 'react-native'
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from 'react-native-responsive-number'
import { getStatusBarHeight } from 'react-native-status-bar-height'
const Admin_panel = (props) => {
  return (
    <View style={style.container}>
      <View style={style.panel}>
        <Text style={style.text}>Zalogowano</Text>
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={() => props.navigation.navigate('Osoby_editor')}
        // onPress={() => {
        //   fetch('http://192.168.8.126/www/json.php', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ test: 'nie', moze: 'tak' }),
        //   })
        // }}
      >
        <Text style={style.text}>Osoby</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    // justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    // height: responsiveNumber(50),
    flex: 1,
    backgroundColor: '#212127',
    // bottom: getStatusBarHeight(),
  },
  panel: {
    marginTop: responsiveNumber(80),
    width: '100%',
    height: '10%',
    backgroundColor: '#272732',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: responsiveNumber(100),
  },
  button: {
    marginTop: responsiveNumber(10),
    width: '100%',
    height: '10%',
    backgroundColor: '#444458',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4.3),
    letterSpacing: responsiveLetterSpacing(300, 4.3),
  },
})

export default Admin_panel
