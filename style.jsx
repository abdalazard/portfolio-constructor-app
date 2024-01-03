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
      fontSize: 20,
      fontWeight: 'bold',

    },
    cardText: {
      color: '#fff',
      fontSize: 20,
    },
    input: {
      height: 40,
      width: 280,
      backgroundColor: '#fff',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 5,
      padding: 10,
    },
    linkText: {
      color: '#0000ff',
      marginTop: 15,
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 15,
    },
    logo: {
      marginTop: 50,
      marginBottom: 10,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontWeight: 'bold',
        color: 'green',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonTitle: {
      marginTop: 10,
      backgroundColor: 'green',
      fontSize: 20,
      borderRadius: 5,
    },

    buttonText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    }    

  });

  export default styles;