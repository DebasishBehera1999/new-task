import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Learncss';
const LearnMore = () => {
  return (
    <View>
        <View style={styles.button_one}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>LEARN MORE</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default LearnMore;

