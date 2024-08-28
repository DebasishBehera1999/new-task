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
        top: '59%',
        zIndex: 1,
        width: 50,
        height: 50,
        backgroundColor:'#ECA2A6',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rightArrow: {
        position: 'absolute',
        right: 20,
        top: '59%',
        zIndex: 1,
        width: 50,
        height: 50,
        backgroundColor: '#ECA2A6',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      mainCard: {
        width: width * 0.8,
        backgroundColor:'#FBECED',
        borderRadius: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60,
      },
      innerCard: {
        width: width * 0.7,
          backgroundColor:'#FBECED',
        borderRadius: 10,
        margin:10,
        marginTop:40,
      },
      imageContainer: {
        width: '100%',
        
      },
      image: {
        width: '100%',
        height: 240,
        borderRadius: 19,
    
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        textAlign: 'left',
      },
      descriptionText: {
        fontSize: 14,
        marginTop: 25,
        textAlign: 'left',
        color: '#666',
        marginBottom:95
      },
});