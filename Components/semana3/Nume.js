import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NumeroAleatorio(props) {
  const {Min,Max} = props
  
  const alfa = Max - Min 
  const numeroale = Math.floor (Math.random() * alfa)+ Min
  return (
    <View>
      <Text>Numero Aleatorio</Text>
    </View>
  )
}

const styles = StyleSheet.create({})