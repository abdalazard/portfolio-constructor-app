import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#000',
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: 'bold',

    },
    card: {
      padding: 20,
      borderRadius: 10,
      margin: 20,
      backgroundColor: '#89CFF0',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    cardText: {
      color: '#fff',
      fontFamily: 'Arial',
      fontSize: 20,
    },
    input: {
      height: 40,
      backgroundColor: '#fff',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 5,
      padding: 10,
    },
  });

  export default styles;