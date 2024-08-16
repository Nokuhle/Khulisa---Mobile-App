import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing Screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import BottomTabNavigator from './app/screens/BottomTabNavigator';
import CreateAccount from './app/screens/CreateAccount';
import ClimateAlert from './app/screens/ClimateAlertsScreen';
import CropHealthInsights from './app/screens/CropHealthInsights';
import WateringSchedule from './app/screens/OptimalWateringSchedule';
import RegionDetails from './app/screens/RegionDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create Account" component={CreateAccount} />

        <Stack.Screen name="Climate Alerts" component={ClimateAlert} />
        <Stack.Screen name="Crop Health Insights" component={CropHealthInsights} />
        <Stack.Screen name="Watering Schedule" component={WateringSchedule}/>
        <Stack.Screen name="RegionDetails" component={RegionDetails} options={{ title: 'Region Details' }} />

        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
