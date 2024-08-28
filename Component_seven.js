import { StyleSheet, Text, View,TextInput, Button,TouchableOpacity ,Alert} from 'react-native'
import React, { useState } from 'react';
import styles from './Sevencss';
const Component_seven = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const validate = () => {
      let valid = true;
  
      if (name.length < 2) {
        setNameError('Name must be at least 2 characters long');
        valid = false;
      } else {
        setNameError('');
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setEmailError('Invalid email address');
        valid = false;
      } else {
        setEmailError('');
      }
  
      return valid;
    };
    const handleSubmit = () => {
        if (validate()) {
          Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}`);
          // You can also handle form submission here
        }
    };

  return (
    <View style={styles.container}>
     <View style={styles.HeadText1}>
     <Text style={styles.text1}>Subscribe to our</Text>
     <Text style={styles.text1}>Newsletter</Text>
     </View>
     <View style={styles.HeadText2}>
     <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur</Text>
     <Text style={styles.text2}>adipiscing elit nullam nunc justo sagittis</Text>
     <Text style={styles.text2}>suscipit ultrices. Sample text. Lorem ipsum</Text>
     <Text style={styles.text2 }>dolor sit amet, consectetur adipiscing elit</Text>
     <Text style={styles.text2}>nullam nunc justo sagittis suscipit ultrices.</Text>
     </View>

<View style={styles.Form_container}>
<View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
        />
      </View>
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

    
    <TouchableOpacity onPress={handleSubmit} style={styles.button} >
    <Text style={styles.buttonText} >SUBMIT </Text>
    </TouchableOpacity>
</View>
    </View>
  )
}

export default Component_seven;

