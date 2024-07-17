import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import * as Location from 'expo-location';

const WINDY_API_KEY = 'IE9u5jPHqXedtHCZHoRHwWhad03TSPTx';

const MyCropsScreen = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

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
      getWeatherData(latitude, longitude); // Fetch weather data after getting location
    } catch (error) {
      console.error('Error getting location', error);
      Alert.alert('Error', 'Unable to get location');
    }
  };

  const getWeatherData = async (latitude, longitude) => {
    const requestBody = {
      lat: latitude,
      lon: longitude,
      model: 'gfs',
      parameters: ['wind', 'dewpoint', 'rh', 'pressure','precip'],
      levels: ['surface'],
      key: WINDY_API_KEY
    };

    try {
      const response = await fetch('https://api.windy.com/api/point-forecast/v2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        console.error('Failed to fetch weather data', response.statusText);
        Alert.alert('Error', 'Failed to fetch weather data');
        return;
      }

      const data = await response.json();
      console.log('Weather Data:', data);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data', error);
      Alert.alert('Error', 'Unable to fetch weather data');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title='Get Current Location' onPress={getLocation} />
      <TextInput value={location} placeholder="Location coordinates" editable={false} style={{borderColor: 'gray', borderWidth: 1, marginTop: 10, padding: 5}}/>
      {weatherData && (
        <View style={{ marginTop: 20 }}>
          <Text>Wind: {weatherData['wind-surface'] ? weatherData['wind-surface'][0] : 'N/A'} m/s</Text>
          <Text>Dew Point: {weatherData['dewpoint-surface'] ? weatherData['dewpoint-surface'][0] : 'N/A'} °C</Text>
          <Text>Humidity: {weatherData['rh-surface'] ? weatherData['rh-surface'][0] : 'N/A'} %</Text>
          <Text>Pressure: {weatherData['pressure-surface'] ? weatherData['pressure-surface'][0] : 'N/A'} hPa</Text>
          <Text>Precipitation: {weatherData['past3hprecip-surface'] ? weatherData['past3hprecip-surface'][0] : 'N/A'} mm</Text>
        </View>
      )}
    </View>
  );
};

export default MyCropsScreen;
