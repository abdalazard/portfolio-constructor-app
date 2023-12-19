import { Text, View, TextInput, Button, TouchableOpacity, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import styles from '../style.jsx';
import Card from './Components/Card';
import { getApiUrl } from './utils/api.js';
import Modal from './Components/Modal';

export default function CreateUser({ navigation }) {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalText, setModalText] = useState('');
    const [redirectOnClose, setRedirectOnClose] = useState(false);
    const [requestSuccess, setRequestSuccess] = useState(false);
    const [messageError, setMessageError] = useState('');

    const handleModalClose = () => {
        setModalVisible(false);
        if (redirectOnClose) {
            navigation.navigate('Auth');
        } 
    };

    const register = () => {
        fetch(getApiUrl('register'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword,
            }),
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            if(data.error) {
                setModalMessage('Ocorreu um erro ao realizar o cadastro.');
                setModalText('');
                setModalVisible(true);
                setRedirectOnClose(false);
                setRequestSuccess(false);
                if (data.error.email) {
                    console.log(data.error.email);
                    setMessageError(data.error.email);
                }
                if (data.error.name) {
                    console.log(data.error.name);
                    setMessageError(data.error.name);
                }
                if (data.error.password) {
                    console.log(data.error.password);
                    setMessageError(data.error.password);
                }
                if (data.error.password_confirmation) {
                    console.log(data.error.password_confirmation);
                    setMessageError(data.error.password_confirmation);
                }
                
            } else {
                setModalMessage('Cadastro realizado com sucesso!');
                setModalText('Agora você tem acesso.');
                setModalVisible(true)
                setRedirectOnClose(true);
                setRequestSuccess(true); 
            }
        })
        .catch((error) => {
            setModalMessage('Ocorreu um erro ao realizar o cadastro.');
            setModalText('');
            setModalVisible(true);
            setRedirectOnClose(false);
            setRequestSuccess(false);
            if(error) {
                setModalMessage('Ocorreu um erro ao realizar o cadastro.');
                setModalText('');
                setModalVisible(true);
                setRedirectOnClose(false);
                setRequestSuccess(false);
                if (!error.email || !error.name || !error.password || !error.password_confirmation) {
                    console.log(error);
                    setMessageError("Erro na conexão com a API");
                } else {
                    if (error.email) {
                        console.log(error.email);
                        setMessageError(error.email);
                    }
                    if (error.name) {
                        console.log(error.name);
                        setMessageError(error.name);
                    }
                    if (error.password) {
                        console.log(error.password);
                        setMessageError(error.password);
                    }
                    if (error.password_confirmation) {
                        console.log(error.password_confirmation);
                        setMessageError(error.password_confirmation);
                    }
                }
                
            }
        });        
    };

    return (
        <View style={styles.container}>
            <Image 
                style={{...styles.logo, width: 220, height: 220}}
                source={require('../assets/logo.png')} />
            <Text style={estilo.messageError}>{messageError}</Text>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={styles.container}
                keyboardVerticalOffset={50}>
                <Card estilo={estilo.card}>
                    <Text style={styles.cardText}>Username</Text>
                    <TextInput style={styles.input} onChangeText={setName} value={name}/>
                    <Text style={styles.cardText}>E-mail</Text>
                    <TextInput style={styles.input} onChangeText={setEmail} value={email}/>
                    <Text style={styles.cardText}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} onChangeText={setPassword} value={password} />
                    <Text style={styles.cardText}>Password confirmation</Text>
                    <TextInput style={styles.input} secureTextEntry={true} onChangeText={setConfirmPassword} value={confirmPassword}/>
                    <Button title="Register" onPress={register} />
                    <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
                        <Text style={styles.linkText}>Log In</Text>
                    </TouchableOpacity>
                </Card>
            </KeyboardAvoidingView>
            <Modal modalTitle={requestSuccess ? estilo.modalTitle : estilo.modalTitleError} visible={modalVisible} onClose={() => handleModalClose()} title={modalMessage} buttonTitle={requestSuccess ? "Fazer login." : "Tentar cadastro."} buttonTitleStyle={requestSuccess ? estilo.buttonTitle : estilo.buttonTitleError}>
                <Text style={estilo.modalText}>{modalText}</Text>
            </Modal>
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
    height: 430,
    maxWidth: 500,
    marginBottom: 20,
    },
modalText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    },
buttonTitle: {
    marginTop: 10,
    backgroundColor: 'green',
    fontSize: 20,
    borderRadius: 5,
    },
buttonTitleError: {
    marginTop: 10,
    backgroundColor: 'red',
    fontSize: 20,
    borderRadius: 5,
},
modalTitle: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
},
modalTitleError: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
},
messageError: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 60,
},
    
});