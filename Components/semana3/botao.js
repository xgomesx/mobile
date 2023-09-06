import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'bootstrap'

export default function botao() {
    function executarbotao2() {
        alert('Botao 2')

    }
    return (
        <View>
            <Text style={styles.texto}>botões</Text>

            <Button
                tittle='botao 1'
                onpress={() => alert('Botao 1')}
            />

            <Text style={styles.texto}>botões</Text>

            <Button
                tittle='botao 2'
                onpress={() => {executarbotao2}}
            />

        </View>
    )
}

const styles = StyleSheet.create({})