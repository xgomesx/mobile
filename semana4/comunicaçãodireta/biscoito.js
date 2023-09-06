import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const BiscoitoDaSorte = () => {
    const [mensagem, setMensagem] = useState('');
    const [bloquearBotao, setBloquearBotao] = useState(false);
    const [imagemBiscoito, setImagemBiscoito] = useState(require('../assets/biscoito.png'));

    const quebrarBiscoito = () => {
        const mensagens = [
            "A sorte está a seu favor.",
            "Seu esforço será recompensado em breve.",
            "Você será corno em breve!!",
            "A vida é feita de momentos especiais.",
            "Acredite em si mesmo e siga em frente."
        ];

        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        setMensagem(mensagemAleatoria);
        setBloquearBotao(true);
        setImagemBiscoito(require('../assets/biscoito2.png'));
    };

    const reiniciarBiscoito = () => {
        setMensagem('');
        setBloquearBotao(false);
        setImagemBiscoito(require('../assets/biscoito.png'));
    };

    return (
        <View style={styles.container}>
            <View style={styles.biscoito}>
                <Image source={imagemBiscoito} style={styles.imagemBiscoito} />
                <Text style={styles.mensagem}>{mensagem}</Text>
                <Button
                    title="Quebrar Biscoito"
                    onPress={quebrarBiscoito}
                    disabled={bloquearBotao}
                    color="orange" 
                    style={styles.botao}
                />
                <Button
                    title="Reiniciar Biscoito"
                    onPress={reiniciarBiscoito}
                    disabled={!bloquearBotao}
                    color="orange" 
                    style={styles.botao}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    biscoito: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: 'transparent', 
        elevation: 0, 
        borderWidth: 0, 
    },
    imagemBiscoito: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderWidth: 0, 
    },
    mensagem: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: 'orange',
    },
    button: {
        borderWidth: 2, // Espessura da borda
        borderColor: 'blue', // Cor da borda
        borderRadius: 10, // Raio do canto da borda (opcional)
        paddingHorizontal: 20,
        paddingVertical: 10,
    
        
    },
});

export default BiscoitoDaSorte;