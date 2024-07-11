import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) =>{
    return(
        <View style={StyleSheet.container}>
            <Image source={require('../../assets/KhulisaLogo1.jpg')} style={StyleSheet.logo}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body:{
        backgroundColor:'white'
    },
    container: {
        backgroundColor:'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 200,
        height: 200, 
        resizeMode: 'contain', 
      },
});

export default WelcomeScreen;