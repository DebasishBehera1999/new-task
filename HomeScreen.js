import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking, Animated, Dimensions } from 'react-native';
import React, { useRef } from 'react';
import Component_one from './Component_one';
import Component_two from './Component_two';
import Component_three from './Component_three';
import LearnMore from './LearnMore';
import Sample from './Sample';
import Component_four from './Component_four';
import Component_five from './Component_five';
import Component_six from './Component_six';
import Component_seven from './Component_seven';
import Component_eight from './Component_eight';
import Component_nine from './Component_nine';
import ImageList from './ImageList';
import styles from './HomeScreencss'; 
import Entypo from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const scrollY = new Animated.Value(0);

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={0}
      >
       <View style={styles.header_one}>
       <View style={styles.header1}>
          <Text style={styles.text_1}>Logo</Text>
        </View>
        <View style={styles.header1}>
        <TouchableOpacity style={styles.menu}>
          <Entypo name="menu" size={35} color="black" />
        </TouchableOpacity>
        </View>
       </View>
      
        <View style={styles.container_one}>
          <Image
            source={{ uri: 'https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/hands-engineer-working-blueprint-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus7.jpg' }}
            style={styles.image}
          />
        </View>
       <View style={styles.design}>
       <View style={styles.header2}>
          <Text style={styles.text2}>Designing spaces that</Text>
          <Text style={styles.text3}>inspire</Text>
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
        <LearnMore />
       </View>
      
        <ImageList scrollY={scrollY} />
        <Component_one />
      
        
        <Component_two scrollY={scrollY} />
        
        <Component_three   />
        <View style={styles.why_container}>
          <View style={styles.header}>
            <Text style={styles.text1}>Why Us</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.text6}>Lorem ipsum dolor sit amet,</Text>
            <Text style={styles.text6}>consectetur adipiscing elit nullam</Text>
            <Text style={styles.text6}>nunc justo sagittis suscipit</Text>
            <Text style={styles.text6}>ultrices. Excepteur sint occaecat</Text>
            <Text style={styles.text6}>cupidatat non proident, sunt in</Text>
            <Text style={styles.text6}>culpa qui officia deserunt mollit</Text>
            <Text style={styles.text6}>anim id est laborum.</Text>
          </View>

          <LearnMore />

          <Sample />
        <Sample />
        <Sample />

        <View style={styles.image_container}>
          <Image
            source={{ uri: 'https://assets.nicepagecdn.com/11a8ddce/4072348/images/low-angle-shot-facade-white-modern-building-blue-clear-sky.jpg' }}
            style={styles.image2}
          />
        </View>
        </View>
       
      
     
        <Component_four scrollY={scrollY} />

        <View>
          <View style={styles.container_two}>
            <View style={styles.text}>
              <Text style={styles.text7}>Read what our</Text>
              <Text style={styles.text7}>customers say</Text>
            </View>
            <Component_five />
          </View>
        </View>
        <View style={styles.container_three}>
          <View style={styles.header}>
            <Text style={styles.text1}>We create unique,</Text>
            <Text style={styles.text1}>singular spaces</Text>
          </View>
          <View style={styles.header3}>
            <Text style={styles.text6}>Duis aute irure dolor in reprehenderit</Text>
            <Text style={styles.text6}>voluptate velit esse cillum dolore eu</Text>
            <Text style={styles.text6}>fugiat nulla pariatur. Excepteur sint</Text>
            <Text style={styles.text6}>occaecat cupidatat non proident, sunt</Text>
            <Text style={styles.text6}>culpa qui officia deserunt mollit anim</Text>
            <Text style={styles.text6}>est laborum.</Text>
          </View>

          <LearnMore />
        </View>
        

        <Component_six />
        <Component_seven />
        <Component_eight scrollY={scrollY} />
        <Component_nine />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Sample text. Click to select the Text Element.</Text>
          <Text style={styles.brand}>This site was created with the <Text style={{ color: '#ADCCE9' }} onPress={() => openLink('https://www.ridhitek.com')}>Nicepage</Text></Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;




