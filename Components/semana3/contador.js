import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'bootstrap'

export default function Contador() {
    const {count, setCount} = useState(0);

    const increment =() =>{
        setCount (count + 1);
    };

    const decrement =() =>{
        setCount (count - 1);
    };
    return (

        <View style={styles.container}>
            <Text style={styles.text}>Volume</Text>
            <Text style={styles.text}>0</Text>
            <View style={styles.botao}>
                <Button tittle='Incrementar' onPress ={increment} />
                <Button tittle='decrementar' onPress ={decrement} />
            </View>
            </View>

            )
}
            const styles = StyleSheet.create({ })
            container :{
                flex:],
                justifyContent: 'center',
                aligmItens 'center',
            },
            text{
                fontsize:30
            }