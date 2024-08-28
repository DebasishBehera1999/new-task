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
        top: '45%',
        zIndex: 1,
        width: 50,
        height: 50,
        backgroundColor: 'pink',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rightArrow: {
        position: 'absolute',
        right: 20,
        top: '45%',
        zIndex: 1,
        width: 50,
        height: 50,
        backgroundColor: 'pink',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      
      },
    
      mainCard: {
        width: width * 0.8,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60,
        marginBottom:80,
        
      },
      innerCard: {
        width: width * 0.8,
        backgroundColor: '#FFF',
        borderRadius:35
      },
      imageContainer: {
        width: '23%',
        height:'23%',
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#f5edee',
        marginTop:40,
      },
      image: {
        width: '45%',
        height:30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleText: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        marginBottom:80,
        padding:10,
        margin:10
      },
      descriptionText: {
        fontSize: 15,
        marginTop: 25,
        textAlign: 'center',
        color: '#666',
        marginBottom:25
      },
});