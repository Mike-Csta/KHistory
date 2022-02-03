import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Animated } from 'react-native'
import { firebase, db } from '../../../../firebase'
import { doc, getDoc, setDocument } from 'firebase/firestore'

const CytatApi = (props) => {
  let [cytat, setCytat] = useState({
    Cytat1: ['', ''],
    Cytat2: ['', ''],
    Cytat3: ['', ''],
    Cytat4: ['', ''],
    Cytat5: ['', ''],
  })

  let data = new Date().getDate() // będzie 31 cytatów i zależne będą od dnia miesiąca
  let sec = new Date().getSeconds() // to chwilowo
  const Read = () => {
    const myDoc = doc(db, 'Cytaty', 'Wszystkie')

    getDoc(myDoc).then((snapshot) => {
      if (snapshot.exists) {
        setCytat(snapshot.data())
      } else {
        alert('Brak połączenia z internetem')
        console.log('none')
      }
    })
  }

  useEffect(() => {
    Read()
  }, [])

  if (props.typ == 'cytat') {
    return <Text>{cytat[`Cytat${props.numer}`][0]}</Text>
  } else if (props.typ == 'autor') {
    return <Text>{cytat[`Cytat${props.numer}`][1]}</Text>
  } else {
    return <Text>Wiel Błond</Text>
  }
}

export { CytatApi }
