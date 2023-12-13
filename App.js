import { Text, View } from 'react-native';
import Card from './src/Card';
import styles from './style.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Orders Access</Text>
      <Card />
    </View>
  );
}
