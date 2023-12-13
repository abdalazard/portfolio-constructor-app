import { View } from 'react-native';
import Auth from './Auth';
import React from 'react';
import styles from '../style.jsx';

export default function App() {
  return (
    <View style={styles.card}>
        <Auth />
    </View>
  );
}