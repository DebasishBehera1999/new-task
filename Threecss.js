import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
    
      },
      text2: {
        fontSize: 25,
        color: 'black',
        marginTop: 90,
        textAlign: 'center',
      },
      text3: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
      },
      header2: {
        marginLeft: 10,
      },
      header3: {
        margin: 30,
      },
      text4: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        margin: 5,
        color: 'gray',
      },
      text5: {
        fontSize: 25,
        color: 'black',
        marginLeft: 15,
      },
      text6: {
        fontSize: 16,
        color: 'black',
        margin: 5,
        color: 'gray',
      },
      imageContainer: {
        backgroundColor:'white',
        margin:0,
        borderRadius:20
      },
      image: {
        width: 259,
        height: 230,
        top: 50,
        resizeMode: 'cover',
        borderRadius: 30,
        marginLeft: 70,
      },
      header4: {
        marginLeft: 19,
      },
});