import { Modal as RNModal, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import styles from '../../style.jsx';

export default function Modal({ visible, onClose, title, children, buttonTitle, modalTitle, buttonTitleStyle }) {
    return (
        <RNModal visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={modalTitle}>{title}</Text>
                    {children}
                    <TouchableOpacity onPress={onClose} style={buttonTitleStyle}>
                        <Text style={styles.buttonText}>{buttonTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </RNModal>
    );
}