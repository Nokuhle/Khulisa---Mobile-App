import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { requestLocationPermission, getCurrentLocation } from '../../components/LocationData';
import { getWeatherData } from '../../components/WeatherData';

const MyCropsScreen = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    (async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        return;
      }
    })();
  }, []);

  const getLocation = async () => {
    const coords = await getCurrentLocation();
    if (coords) {
      const { latitude, longitude } = coords;
      setLocation(`${latitude}, ${longitude}`);
      fetchWeatherData(latitude, longitude); 
    }
  };

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const data = await getWeatherData(latitude, longitude);
      console.log('Weather Data:', data);
      setWeatherData(data);
    } catch (error) {
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
