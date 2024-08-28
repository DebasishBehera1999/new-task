import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
 
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
      },
      map: {
        width: Dimensions.get('window').width,
        height: 400,
        marginTop: 16,
      },
      addressContainer: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5,
        elevation: 2,
      },
      addressText: {
        fontSize: 16,
      },
});