import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import ImageList from './ImageList';
import LearnMore from './LearnMore';
import styles from './Onecss';
const Component_one = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
        
        <View style={styles.header2}>
          <Text style={styles.text2}>High-performance</Text>
          <Text style={styles.text3}>design</Text>
        </View>
        <View style={styles.header3}>
          <Text style={styles.text4}>Lorem ipsum dolor sit amet,</Text>
          <Text style={styles.text4}>consectetur adipiscing elit nullam</Text>
          <Text style={styles.text4}>nunc justo sagittis suscipit</Text>
          <Text style={styles.text4}>ultrices. Excepteur sint occaecat</Text>
          <Text style={styles.text4}>cupidatat non proident, sunt in</Text>
          <Text style={styles.text4}>culpa qui officia deserunt mollit</Text>
          <Text style={styles.text4}>anim id est laborum.</Text>
        </View>
        <LearnMore/>
      
        </View>
      </ScrollView>

    </View>
  )
};

export default Component_one;

