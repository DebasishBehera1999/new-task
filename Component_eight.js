import React, { useState } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Eightcss';
const { width, height } = Dimensions.get('window');

const Component_eight = ({ scrollY }) => {
  const [componentY, setComponentY] = useState(0);


  const handleLayout = (event) => {
    const { y } = event.nativeEvent.layout;
    setComponentY(y);
  };

  
  const translateX = scrollY.interpolate({
    inputRange: [componentY - height, componentY],
    outputRange: [width, 0], 
    extrapolate: 'clamp',
  });

  
  const opacity = scrollY.interpolate({
    inputRange: [componentY - height, componentY],
    outputRange: [0.1, 0.7],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      onLayout={handleLayout}
      style={[styles.container, { transform: [{ translateX }], opacity }]}
    >
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.row}>
            <Icon name="phone" size={width * 0.08} color="#E7868A" />
            <Title style={styles.title}>CALL US</Title>
          </View>
          <Paragraph>1 (234) 576-891,</Paragraph>
          <Paragraph>1 (234) 987-654</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.row}>
            <Icon name="map-marker" size={width * 0.08} color="#E7868A" />
            <Title style={styles.title}>LOCATION</Title>
          </View>
          <Paragraph>121 Rock Street, 21 Avenue, New York,</Paragraph>
          <Paragraph>NY 92103-9000</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.row}>
            <Icon name="clock" size={width * 0.08} color="#E7868A" />
            <Title style={styles.title}>HOURS</Title>
          </View>
          <Paragraph>Mon–Fri……11 am – 8 pm, Sat, Sun……6</Paragraph>
          <Paragraph>am – 8 pm</Paragraph>
        </Card.Content>
      </Card>
    </Animated.View>
  );
};

export default Component_eight;








