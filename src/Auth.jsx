import { Text, View, TextInput, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import styles from '../style';
import Card from './Components/Card';


export default function Auth({ navigation }) {
    //Requer métodos para autenticar usuário

    return (
        <View style={styles.container}>
            <Image 
                style={{...styles.logo, width: 220, height: 220}}
                source={require('../assets/logo.png')} />
            <Card estilo={estilo.card}>
                <Text style={styles.cardText}>E-mail</Text>
                <TextInput style={styles.input} />
                <Text style={styles.cardText}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} />
                <Button title="Log In" onPress={() => { alert("Teste")}} />
                <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
                    <Text style={styles.linkText}>Create User</Text>
                </TouchableOpacity>
            </Card>   
        </View>
                 
    );
}

const estilo = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#89CFF0',
        alignItems: 'center',
        justifyContent: 'center',
        height: 280,
        maxWidth: 500,
      },
  });