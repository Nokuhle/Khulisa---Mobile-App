import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <LinearGradient
        colors={['#7AE844', 'rgb(0, 140, 39)']}
        locations={[0, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.linearGradient}
      >
       <Image source={require('../../assets/KHULISA1-removebg-preview.png')} style={styles.logo}/>
       <Text style={styles.text}>Planting Seeds of Growth</Text>
       <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity>
      </LinearGradient>
        
        </View>
    );
};

const styles = StyleSheet.create({
    body:{
        // backgroundColor:'red'
       
    },
    buttonText:{
        color:'white',
    },
    container: {
        fontFamily: 'League Spartan',
        flex: 1,
        alignItems: 'center',
      },
      text:{
        fontFamily: 'League Spartan',
        fontSize: 18,
        color: 'white',
        top: -170,
        fontWeight: 'bold',

      },
      logo: {
        width: 450,
        height: 500, 
        resizeMode: 'contain', 
        marginTop: 40,
      },
      linearGradient: {
        flex: 1,
        alignItems: 'center',
        height: 100,
        width: '100%',
      },
      button: {
        backgroundColor: 'rgb(0, 140, 39)',
        top: -110,
        padding: 15,
        borderRadius: 20,
        width: 150,
        alignItems: 'center',
      },
});

export default WelcomeScreen;