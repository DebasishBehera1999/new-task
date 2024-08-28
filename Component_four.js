import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import React, { useState } from 'react';
import styles from './Fourcss';
const Component_four = ({ scrollY }) => {
  const [componentY, setComponentY] = useState(0);

  
  const handleLayout = (event) => {
    const { y } = event.nativeEvent.layout;
    setComponentY(y);
  };


  const scale = scrollY.interpolate({
    inputRange: [componentY - 300, componentY + 300], 
    outputRange: [0.1, 1.1], 
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale }] }]}
      onLayout={handleLayout}
    >
      <View style={styles.text_box}>
        <Text style={styles.text1}>We are passionate about</Text>
        <Text style={styles.text1}>solving problems</Text>
      </View>

      <Text style={styles.text_link}>Image from Freepik</Text>

      <View style={styles.section}>
        <View style={styles.image_container}>
          <Image source={require('./assets/building.png')} style={styles.image1} />
        </View>
        <Text style={styles.text2}>Curiosity</Text>
        <View style={styles.text_box1}>
          <Text style={styles.text3}>Sample text. Click to select the Text</Text>
          <Text style={styles.text3}>Element. ​Lorem ipsum dolor sit amet</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.image_container}>
          <Image source={require('./assets/hand.png')} style={styles.image1} />
        </View>
        <Text style={styles.text2}>Curiosity</Text>
        <View style={styles.text_box1}>
          <Text style={styles.text3}>Sample text. Click to select the Text</Text>
          <Text style={styles.text3}>Element. ​Lorem ipsum dolor sit amet</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.image_container}>
          <Image source={require('./assets/openHand.png')} style={styles.image1} />
        </View>
        <Text style={styles.text2}>Curiosity</Text>
        <View style={styles.text_box1}>
          <Text style={styles.text3}>Sample text. Click to select the Text</Text>
          <Text style={styles.text3}>Element. ​Lorem ipsum dolor sit amet</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default Component_four;


