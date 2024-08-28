import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity, Linking, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Sixcss';
const { width } = Dimensions.get('window');

const images = [
  { uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city90.jpg', text: 'Sample Headline', description: 'Sample text. Click to select the Text Element.' },
  { uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/dfdfdff.jpg', text: 'Sample Headline', description: 'Sample text. Click to select the Text Element.' },
  { uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/ghgh.jpg', text: 'Sample Headline', description: 'Sample text. Click to select the Text Element.' },
  { uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city235.jpg', text: 'Sample Headline', description: 'Sample text. Click to select the Text Element.'},
  { uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/456.jpg', text: '4 Cannon Street', description: 'Sample text. Click to select the Text Element.' },
  { uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city-9.jpg', text: 'Arbor, London, UK', description: 'Sample text. Click to select the Text Element.' },
  { uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/4680.jpg', text: '4 Cannon Street', description: 'Sample text. Click to select the Text Element.' },
  { uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/r5.jpg', text: 'Arbor, London, UK', description: 'Sample text. Click to select the Text Element.'},
  

];

const Component_six = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + direction;
        if (nextIndex >= images.length) {
          nextIndex = images.length - 1;
          setDirection(-1);
        } else if (nextIndex < 0) {
          nextIndex = 0;
          setDirection(1);
        }
        flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [direction]);

  const onScrollEnd = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = images.length - 1;
    }
    setCurrentIndex(nextIndex);
    flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
  };

  const handlePrev = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = 0;
    }
    setCurrentIndex(prevIndex);
    flatListRef.current.scrollToIndex({ animated: true, index: prevIndex });
  };

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
       <View style={styles.mainCard}>
       <FlatList
          data={images}
          ref={flatListRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onScrollEnd}
          renderItem={({ item }) => (
            <View style={styles.innerCard}>
              <TouchableOpacity style={styles.imageContainer}>
                <Image source={{ uri: item.uri }} style={styles.image} />
              </TouchableOpacity>
              <Text style={styles.titleText}>{item.text}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
    
      <TouchableOpacity style={styles.leftArrow} onPress={handlePrev}>
        <Entypo name="chevron-left" size={30} color="white" />
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.rightArrow} onPress={handleNext}>
        <Entypo name="chevron-right" size={30} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
};



export default Component_six;