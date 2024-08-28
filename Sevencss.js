import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
 
    container:{
        backgroundColor:'#fce3e5',
        marginTop:60
    },
    text1:{
        fontSize:25,
        marginLeft:29
    },
    text2:{
        fontSize:15,
        marginLeft:29,
    },
    HeadText1:{
        marginTop:45,
        marginBottom:20
    },
    HeadText2:{
        
        marginBottom:50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        margin:1
      },
      label: {
        width: 80, 
         fontSize:20,
      },
      input: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
        fontSize:20,
      },
      errorText: {
        color: 'red',
        fontSize: 15,
      },
      Form_container:{
        padding:20
      },
      button: {
        borderRadius: 29,
        backgroundColor: '#E68387',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',  
        marginTop: 20,       
        paddingVertical:15,
        paddingHorizontal:120,
        marginBottom:50,
      },
      buttonText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        
      },
});