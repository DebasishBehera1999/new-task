import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated, Dimensions } from 'react-native';
import LearnMore from './LearnMore';
import styles from './Threecss';
const { width, height } = Dimensions.get('window'); 

const Component_three = () => {
  const translateY = useRef(new Animated.Value(-height)).current; 

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 20, 
      duration: 2800,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150762.jpg' }}
          style={styles.image}
        />
      </View>

      <View style={styles.header2}>
        <Text style={styles.text2}>Design </Text>
      </View>
      <View style={styles.header3}>
        <Text style={styles.text4}>Suspendisse vulputate eros in </Text>
        <Text style={styles.text4}>fermentum cursus. Nulla fringilla</Text>
        <Text style={styles.text4}>justo tellus, at sodales eros. </Text>
        <Text style={styles.text4}>Quisque facilisis lorem augue,</Text>
        <Text style={styles.text4}>amet. </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/low-angle-shot-arc-azadi-tower-t.jpg' }}
          style={styles.image}
        />
      </View>
      <View style={styles.header2}>
        <Text style={styles.text2}>Research </Text>
      </View>
      <View style={styles.header3}>
        <Text style={styles.text4}>Suspendisse vulputate eros in </Text>
        <Text style={styles.text4}>fermentum cursus. Nulla fringilla</Text>
        <Text style={styles.text4}>justo tellus, at sodales eros. </Text>
        <Text style={styles.text4}>Quisque facilisis lorem augue,</Text>
        <Text style={styles.text4}>amet. </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/brilliant-architectural-piece-sh.jpg' }}
          style={styles.image}
        />
      </View>
      <View style={styles.header2}>
        <Text style={styles.text2}>Strategy </Text>
      </View>
      <View style={styles.header3}>
        <Text style={styles.text4}>Suspendisse vulputate eros in </Text>
        <Text style={styles.text4}>fermentum cursus. Nulla fringilla</Text>
        <Text style={styles.text4}>justo tellus, at sodales eros. </Text>
        <Text style={styles.text4}>Quisque facilisis lorem augue,</Text>
        <Text style={styles.text4}>amet. </Text>
      </View>
      <LearnMore />

      <View></View>
    </Animated.View>
  );
};

export default Component_three;

