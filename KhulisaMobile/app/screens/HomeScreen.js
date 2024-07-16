import React from 'react';
import {View, Text, Button, StyleSheet} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({ title, description, image, buttonText}) =>{
    return(
        <ImageBackground source={{ uri: image }} style={styles.card}>
            <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
            <Button title={buttonText} onPress={() => {}} />
            </View>
        </ImageBackground>
    );
};

const HomeScreen = () =>{
    return(
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};

export default HomeScreen();