import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { requestLocationPermission, getCurrentLocation } from '../../components/LocationData';
import { getWeatherData } from '../../components/WeatherData';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';



const ClimateAlertScreen = () => {
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
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <ImageBackground 
                source={require('../../assets/cyclone.jpg')} 
                style={styles.background} 
                imageStyle={{ opacity: 0.7 }}>
                <Button title='Get Current Location' onPress={getLocation} />
                <TextInput value={location} placeholder="Location coordinates" editable={false} style={styles.textinputbox}/>
                {weatherData && (
                    <View style={styles.information_container}>
                    <View style={styles.row}>
                    <Text style={styles.label}>Wind:</Text>
                    <Text style={styles.value}>{weatherData['wind-surface'] ? weatherData['wind-surface'][0] : 'N/A'} m/s</Text>
                    </View>
                    <View style={styles.row}>
                    <Text style={styles.label}>Dew Point:</Text>
                    <Text style={styles.value}>{weatherData['dewpoint-surface'] ? weatherData['dewpoint-surface'][0] : 'N/A'} °C</Text>
                    </View>
                    <View style={styles.row}>
                    <Text style={styles.label}>Humidity:</Text>
                    <Text style={styles.value}>{weatherData['rh-surface'] ? weatherData['rh-surface'][0] : 'N/A'} %</Text>
                    </View>
                    <View style={styles.row}>
                    <Text style={styles.label}>Pressure:</Text>
                    <Text style={styles.value}>{weatherData['pressure-surface'] ? weatherData['pressure-surface'][0] : 'N/A'} hPa</Text>
                    </View>
                    <View style={styles.row}>
                    <Text style={styles.label}>Precipitation:</Text>
                    <Text style={styles.value}>{weatherData['past3hprecip-surface'] ? weatherData['past3hprecip-surface'][0] : 'N/A'} mm</Text>
                    </View>
                </View>
                )}
            </ImageBackground>
      
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    textinputbox:{
      borderColor: 'black', 
      borderWidth: 3, 
      Tcolor:'black',
      marginTop: 10, 
      padding: 5
    },
    information_container: {
      marginTop: 20,
      backgroundColor: 'rgba(255, 255, 255, 0)', // Clear background
      paddingHorizontal: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.5)', // Light separator line
    },
    label: {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // White background with lower opacity
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
    },
    value: {
      color: 'white',
    },
  });

export default ClimateAlertScreen;
