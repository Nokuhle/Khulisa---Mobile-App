import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import * as Location from 'expo-location'; // Corrected import statement

const MyCropsScreen = () => {
  const [location, setLocation] = useState('');


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to fetch your location');
        return;
      }
    })();
  }, []);

  const getLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const coords = `${latitude}, ${longitude}`;
      setLocation(coords);
    } catch (error) {
      Alert.alert('Error', 'Unable to get location');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title='Get Current Location' onPress={getLocation} />
      <TextInput value={location} placeholder="Location coordinates" editable={false} style={{borderColor: 'gray', borderWidth: 1, marginTop: 10, padding: 5}}/>
    </View>
  );
};

export default MyCropsScreen;
