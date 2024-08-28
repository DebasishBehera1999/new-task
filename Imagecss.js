import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
      },
    
      leftArrow: {
        position: 'absolute',
        left: 20,
        top: '40%',
        zIndex: 1,
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rightArrow: {
        position: 'absolute',
        right: 20,
        top: '40%',
        zIndex: 1,
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mainCard: {
        width: width * 0.6,
        backgroundColor: '#FFF',
        borderRadius: 30,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60,
        marginBottom:35
      },
      innerCard: {
        width: width * 0.6,
        backgroundColor: '#FFF',
        borderRadius: 40,
      },
      imageContainer: {
        width: '100%',
      },
      image: {
        width: '100%',
        height: 240,
        borderRadius: 20,
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        textAlign: 'center',
      },
      descriptionText: {
        fontSize: 14,
        marginTop: 25,
        textAlign: 'center',
        color: '#666',
        marginBottom:55
      },
});