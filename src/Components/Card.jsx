import { View } from 'react-native';
import styles from '../../style.jsx';
import React from 'react';

export default function Card({ children, estilo }) {
  return (
      <View style={styles.container}>
        <View style={estilo}>
            {children}
        </View>
    </View >

  );
}