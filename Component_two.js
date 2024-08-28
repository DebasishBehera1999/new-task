import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import styles from './Twocss';
const { width, height } = Dimensions.get('window');

const Component_two = ({ scrollY }) => {
  const [componentY, setComponentY] = useState(0);

  // Capture the component's position in the scrollable area
  const handleLayout = (event) => {
    const { y } = event.nativeEvent.layout;
    setComponentY(y);
  };

  // Interpolation for zoom-in and zoom-out effect
  const scale = scrollY.interpolate({
    inputRange: [componentY - height, componentY], // Adjusted for the component's position
    outputRange: [0, 1.2], // Scale from 0 (hidden) to 1.2 (zoomed in)
    extrapolate: 'clamp',
  });

  // Interpolation for bottom-to-top translation
  const translateY = scrollY.interpolate({
    inputRange: [componentY - height, componentY, componentY + height], // Adjusted for the component's position
    outputRange: [height * 0.3, 0, -height * 0.1], // Move from bottom to top
    extrapolate: 'clamp',
  });

  return (
    <Animated.View 
      onLayout={handleLayout} 
      style={[styles.container, { transform: [{ scale }, { translateY }] }]}
    >
      <View style={styles.container}>
        <View style={styles.header2}>
          <Text style={styles.text2}>We create healthy</Text>
          <Text style={styles.text3}>buildings</Text>
        </View>
        <View style={styles.header3}>
          <Text style={styles.text4}>Lorem ipsum dolor sit amet, consectetur</Text>
          <Text style={styles.text4}>adipiscing elit nullam nunc justo sag</Text>
          <Text style={styles.text4}>suscipit ultrices. Images from</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default Component_two;





