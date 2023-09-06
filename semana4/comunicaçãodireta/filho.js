import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants'
import { Button } from 'bootstrap'

export default function filho() {
  return (
    <View>
     {/*fazendo o pedido do pai em que tem as propriedades*/}
      {/* <Text style={{fontSize:30}}>{props.nome} {props.sobrenome}</Text> */}

      <Button
        tittle='Enviar'
        onPress ={()=>alert('clicou')}
      />
  
    </View>
  )
}

const styles = StyleSheet.create({})