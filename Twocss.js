import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
 
    container: {
        backgroundColor: '#FBECED',
        paddingHorizontal: width * 0.05, 
        paddingVertical: height * 0.09, 
      },
      header2: {
        marginBottom: height * 0.02, 
      },
      header3: {
        marginVertical: height * 0.02, 
      },
      text4: {
        fontSize: width * 0.03, 
        color: 'black',
        textAlign: 'center',
        marginVertical: height * 0.01, 
      },
      text2: {
        fontSize: width * 0.06, 
        color: 'black',
        marginTop: height * 0.05, 
        textAlign: 'center',
      },
      text3: {
        fontSize: width * 0.07, 
        color: 'black',
        textAlign: 'center',
      },
});