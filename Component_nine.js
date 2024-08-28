import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import styles from './Ninecss';


const Component_nine = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });


    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {region && (
        <View>
          <MapView
            style={styles.map}
            region={region}
            showsUserLocation={true}
          >
            <Marker coordinate={region} />
          </MapView>
        
        </View>
      )}
    </View>
  );
};



export default Component_nine;


