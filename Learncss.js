import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
 
    button_one: {
        borderWidth: 2,
        borderRadius: 29,
        borderColor: '#E68387',
        maxWidth: 160,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',  
        marginTop: 20,       
        paddingVertical:15,
        paddingHorizontal:20,
        marginBottom:50,
      },
      buttonText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
      
      },
});