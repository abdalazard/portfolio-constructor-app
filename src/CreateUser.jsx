import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from '../style.jsx';
import Card from './Card';

//Requer métodos para criar e integrar API

export default function CreateUser({ navigation }) {
    return (
        <View style={styles.container}>
            <Image 
                style={{...styles.logo, width: 220, height: 220}}
                source={require('../assets/logo.png')} />
            <Card>
                <Text style={styles.cardText}>E-mail</Text>
                <TextInput style={styles.input} />
                <Text style={styles.cardText}>Confirm e-mail</Text>
                <TextInput style={styles.input} />
                <Text style={styles.cardText}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} />
                <Button title="Register" onPress={() => {}} />
                <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
                    <Text style={styles.linkText}>Log In</Text>
                </TouchableOpacity>
            </Card>
        </View>
    );
}