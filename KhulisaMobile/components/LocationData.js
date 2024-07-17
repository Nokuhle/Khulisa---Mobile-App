import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const requestLocationPermission = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permission Denied', 'Location permission is required to fetch your location');
    return false;
  }
  return true;
};

export const getCurrentLocation = async () => {
  try {
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    return { latitude, longitude };
  } catch (error) {
    console.error('Error getting location', error);
    Alert.alert('Error', 'Unable to get location');
    return null;
  }
};
