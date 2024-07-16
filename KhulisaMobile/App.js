//Dependencies
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

//Importing Screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import BottomTabNavigator from './app/screens/BottomTabNavigator';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <BottomTabNavigator/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}