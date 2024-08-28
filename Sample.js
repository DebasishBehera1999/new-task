import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Samplecss';
const Sample = () => {
  return (
    <View tyle={styles.container} >
      <View style={styles.box}>
<Text style={styles.text7}>Sample Headline</Text>
<Text style={styles.text8}>Ut enim ad minim veniam, quis</Text>
<Text style={styles.text8}>nostrud exercitation ullamco laboris</Text>
      <View style={styles.button_one}>
          <TouchableOpacity>
            <Text style={styles.buttonText}> MORE</Text>
          </TouchableOpacity>
        </View>
</View>
    </View>
  )
};

export default Sample;

