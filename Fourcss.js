import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
 
    container: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
      },
      image_container: {
        width: 120,
        height: 120,
        backgroundColor: 'pink',
        borderRadius: 60,
        marginLeft: 35,
        marginBottom: 20,
      },
      image1: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
      },
      text1: {
        fontSize: 25,
        marginLeft: 35,
      },
      text_box: {
        marginBottom: 10,
        marginTop: 20,
      },
      text_box1: {
        marginBottom: 30,
        marginTop: 20,
      },
      text2: {
        fontSize: 25,
        marginLeft: 35,
      },
      text3: {
        fontSize: 15,
        marginLeft: 35,
        color: 'gray',
      },
      text_link: {
        fontSize: 15,
        margin: 35,
        color: 'gray',
      },
      section: {
        marginBottom: 40,
      },
});