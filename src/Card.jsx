import { View } from 'react-native';
import React from 'react';
import styles from '../style.jsx';

export default function Card({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
          {children}
      </View>
    </View >
  );
}