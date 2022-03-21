import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TriangleCorner,
} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import {
  responsiveNumber,
  responsiveLetterSpacing,
} from 'react-native-responsive-number'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import scan from '../../../../src/scan.png'
import lih from '../../../../src/LIH.png'

const Qrbutton = (props) => {
  // console.log(props.numer)
  return (
    <View>
      <View style={style.centerTop}></View>
      <View style={style.center}>
        <TouchableOpacity
          style={style.t1}
          onPress={() => props.navigation.navigate('PeopleAndHis')}
        >
          <View style={style.left}>
            <Image source={lih} style={style.image}></Image>
          </View>
          <View style={style.right}>
            <Text style={style.text}>LUDZIE I HISTORIA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.t}
          onPress={() => props.navigation.navigate('Scan')}
        >
          <View style={style.right_2}>
            <View style={style.right_2_top}>
              <Text style={style.text_2}>KOD</Text>
            </View>
            <View style={style.right_2_center}>
              <Image source={scan} style={style.image_2}></Image>
            </View>
            <View style={style.right_2_bottom}>
              <Text style={style.text_3}>PRZYSTANKU</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  t1: {
    display: 'flex',
    flexDirection: 'row',
    width: '80.1%',
  },
  right_2_top: {
    height: responsiveNumber(15),
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right_2_center: {
    height: responsiveNumber(40),
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right_2_bottom: {
    height: responsiveNumber(15),
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right_2: {
    width: responsiveNumber(70),
    flex: 1,
    borderBottomWidth: 100,
    borderBottomColor: '#994239',
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
    borderRightWidth: 0,
    borderStyle: 'solid',

    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // height: responsiveNumber(90),
    flex: 1,
    // backgroundColor: "black",
    justifyContent: 'flex-end',
  },
  centerTop: {
    // backgroundColor: "#4488ff42",
    flex: 1,
    margin: responsiveNumber(6),

    display: 'flex',
    flexDirection: 'row',
    borderRadius: responsiveNumber(22),
    opacity: 1,

    // height: responsiveNumber(90),
  },
  center: {
    backgroundColor: '#4488ff42',
    // flex: 1,
    margin: responsiveNumber(6),

    display: 'flex',
    flexDirection: 'row',
    borderRadius: responsiveNumber(18),
    opacity: 1,
    height: responsiveNumber(70),
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontSize: RFValue(14),
    letterSpacing: responsiveLetterSpacing(270, 14),
    opacity: 0.93,
  },
  left: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    flex: 0.43,
  },
  right: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  text_2: {
    color: 'white',
    fontSize: RFValue(6.5),
    letterSpacing: responsiveLetterSpacing(90, 6.5),
    opacity: 0.93,
    // backgroundColor: "red",
    marginRight: responsiveNumber(8),
    marginTop: responsiveNumber(7),
    width: responsiveNumber(30),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_3: {
    color: 'white',
    fontSize: RFValue(6.5),
    letterSpacing: responsiveLetterSpacing(90, 6.5),
    opacity: 0.93,
    // backgroundColor: "red",
    marginRight: responsiveNumber(20),
    marginBottom: responsiveNumber(7),
    width: responsiveNumber(70),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { height: responsiveNumber(50), aspectRatio: 1, opacity: 0.68 },
  image_2: {
    height: responsiveNumber(27),
    aspectRatio: 1,
    opacity: 0.68,
    marginRight: responsiveNumber(8),
  },
})

export default Qrbutton
