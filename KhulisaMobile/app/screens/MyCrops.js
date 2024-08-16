import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert, ImageBackground, StyleSheet,ScrollView } from 'react-native';
import { requestLocationPermission, getCurrentLocation } from '../../components/LocationData';
import { getWeatherData } from '../../components/WeatherData';

const MyCropsScreen = () => {

  return (
    <View style={styles.container}>
      <Text>My Crops Screen</Text>
    </View>
  );
};

export default MyCropsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})