import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        marginTop: height * 0.03,
        //  backgroundColor: '#FBECED',
        //  backgroundColor:'#fff',
        flex: 1,
      },
      text1: {
        fontSize: width * 0.07,
      },
      text_1:{
        fontSize: width * 0.07,
        color: 'gray',
       
      },
      header: {
        marginLeft: width * 0.08,
      },
      header1: {
         marginLeft: width * 0.08,
        backgroundColor:'white',
        
      },
      container_one: {
        backgroundColor: '#FBECED',
        padding: width * 0.05,
        height: height * 0.3,
        position: 'relative',
        overflow: 'visible',
      },
      image: {
        width: width * 0.75,
        height: height * 0.28,
        position: 'absolute',
        top: height * 0.07,
        resizeMode: 'cover',
        borderRadius: width * 0.07,
        marginLeft: width * 0.12,
      },
      text2: {
        fontSize: width * 0.065,
        color: 'black',
        marginTop: height * 0.12,
        textAlign: 'center',
      },
      text3: {
        fontSize: width * 0.065,
        color: 'black',
        textAlign: 'center',
      },
      header2: {
        marginLeft: width * 0.03,
      },
      header3: {
        margin: width * 0.04,
      },
      text4: {
        fontSize: width * 0.04,
        color: 'black',
        textAlign: 'center',
        margin: width * 0.01,
      },
      image_container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor:'white',
        marginTop: height * 0.2,
      },
      image2: {
        width: width * 0.85,
        height: height * 0.6,
        borderRadius: width * 0.07,
      },
      container_two: {
        backgroundColor: '#FBECED',
        padding: width * 0.05,
      },
      text6: {
        fontSize: width * 0.04,
        color: 'gray',
        margin: width * 0.01,
      },
      text7: {
        textAlign: 'center',
        fontSize: width * 0.07,
      },
      container_three: {
        marginTop: height * 0.06,
        marginBottom: height * 0.05,
      },
      footer: {
        padding: width * 0.05,
        backgroundColor: '#333333',
        alignItems: 'center',
      },
      footerText: {
        fontSize: width * 0.035,
        color: '#ecf0f1',
        textAlign: 'center',
        marginBottom: height * 0.05,
        marginTop: height * 0.04,
      },
      brand: {
        textAlign: 'center',
        paddingBottom: '3%',
        paddingTop: '8%',
        color: '#ecf0f1',
      },
      why_container:{
        backgroundColor:'white'
      },
      header_one:{
        flexDirection:'row',
        justifyContent:'space-between',
         backgroundColor:'white',
       
      },
      menu:{
        marginRight: width * 0.08,
        marginBottom: height * 0.04,
      },
      design:{
        // backgroundColor:'white'
      }
});
