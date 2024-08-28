import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
 
    container: {
        paddingHorizontal: width * 0.05, 
        marginTop: height * 0.05, 
      },
      card: {
        marginBottom: height * 0.02, 
        borderRadius: width * 0.05, 
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.02, 
      },
      title: {
        marginLeft: width * 0.03,
        color: '#E7868A',
        fontSize: width * 0.05, 
      },
});