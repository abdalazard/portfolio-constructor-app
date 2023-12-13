import { Text, View, TextInput, Button } from 'react-native';
import React from 'react';
import styles from '../style';

export default function App() {
    return (
        <View>
            <Text style={styles.cardText}>E-mail</Text>
            <TextInput style={styles.input} />
            <Text style={styles.cardText}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
            <Button title="Submit" onPress={() => {}} />
        </View>
    );
}