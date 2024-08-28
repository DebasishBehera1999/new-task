import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
      box:{
          borderWidth:2,
          borderColor:'gray',
          borderRadius:15,
          padding:20,
         margin:35,
         backgroundColor:'white'
        },
        text7:{
          fontSize: 23,
          marginBottom:30,
        },
        text8:{
          fontSize: 16,
          color:'gray'
        },
        button_one: {
          borderWidth: 2,
          borderRadius: 29,
          borderColor: '#E68387',
          maxWidth: 160,
           
          marginTop: 40,       
          paddingVertical:15,
          paddingHorizontal:20,
          marginBottom:30,
        },
        buttonText: {
          fontSize: 16,
          color: 'black',
          textAlign: 'center',
        
        },

});