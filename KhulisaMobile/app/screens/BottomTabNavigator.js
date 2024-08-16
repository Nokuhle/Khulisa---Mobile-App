import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import your screens
import HomeScreen from '../screens/HomeScreen';
import MyTipsScreen from '../screens/Tips';
import ProfileScreen from '../screens/Profile';
import MyCrops2 from '../screens/MyCrops2';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="My Crops"
      component={MyCrops2}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="leaf-outline" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Tips"
      component={MyTipsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="person" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="notifications" color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
