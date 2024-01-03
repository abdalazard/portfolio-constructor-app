import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, TextInput, Button, TouchableOpacity, Image, StyleSheet, BackHandler} from 'react-native';
import React, {useState, useEffect} from 'react';
import { getApiUrl } from './utils/api';
import styles from '../style';
import Card from './Components/Card';
import Modal from './Components/Modal';

export default function Auth({ setIsAuthenticated, navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isEmailFocused = focusedField === 'email';
    const isPasswordFocused = focusedField === 'password';

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalText, setModalText] = useState('');

    const [anyFieldFocused, setAnyFieldFocused] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleFocus = (field) => {
        setFocusedField(field);
        setAnyFieldFocused(true);
    };
    
    const handleBlur = (field) => {
        if (field === focusedField) {
            setAnyFieldFocused(false);
        }
    };
    
    const login = () => {
        fetch(getApiUrl("login"), { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data.message == "Unauthorized") {
                setModalMessage('Acesso não autorizado!');
                setModalVisible(true);
                setModalText("Verifique de os dados inseridos por você estão de acordo com os registrados.  \n :(");
            }
            else {
                console.log("Sucesso!");
                AsyncStorage.setItem('token', data.token);
                setIsAuthenticated(true);
                navigation.navigate('Home');
            }
        })        
        .catch((error) => {
            console.log("Sua requisição deu erro! Codigo:" + error);
            setModalMessage('Sua requisição deu erro!');
            setModalVisible(true);
            setModalText('Um erro na requisição impediu seu acesso! \n :(');
        });
    };

    useEffect(() => {
        const backAction = () => {
            if (anyFieldFocused) {
                handleBlur(focusedField);
                return true;
            }
            return false;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, [anyFieldFocused, focusedField]);

    const handleModalClose = () => {
        setModalVisible(false);
    };

    

    return (
        <View style={styles.container}>
            <Image 
                style={{...styles.logo, width: anyFieldFocused ? 0 : 220, height: anyFieldFocused ? 0 : 220, opacity: anyFieldFocused ? 0 : 1}}
                source={require('../assets/logo.png')} 
            />
            <Card estilo={estilo.card}>
                <Text style={styles.cardText}>E-mail</Text>
                <TextInput onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} style={[styles.input, {borderColor: isEmailFocused ? 'blue' : 'gray'}]} onChangeText={setEmail} value={email}/>
                <Text style={styles.cardText}>Password</Text>
                <TextInput onFocus={() => handleFocus('password')} onBlur={() => handleBlur('password')} style={[styles.input, {borderColor: isPasswordFocused ? 'blue' : 'gray'}]} onChangeText={setPassword} value={password} secureTextEntry={true} />
                <Button title="Log In" onPress={login} />
                <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
                    <Text style={styles.linkText}>Create User</Text>
                </TouchableOpacity>
            </Card>

            <Modal modalTitle={estilo.modalTitleError} visible={modalVisible} onClose={() => handleModalClose()} title={modalMessage} buttonTitle={"Me cadastrar"} buttonTitleStyle={estilo.buttonTitleError}>
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
        height: 280,
        maxWidth: 500,
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
        backgroundColor: 'green',
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