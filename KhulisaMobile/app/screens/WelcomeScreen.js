import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Image, Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const WelcomeScreen = ({ navigation }) =>{
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('Login'); // Replace 'Onboarding' with 'Login' if you want to go to the login screen
    });
  }, [fadeAnim]);
    return(
        <View style={styles.container}>
          <Animated.View>
          <LinearGradient
        colors={['#7AE844', 'rgb(0, 140, 39)']}
        locations={[0, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.linearGradient}
      >
       <Image source={require('../../assets/KHULISA1-removebg-preview.png')} style={styles.logo}/>
       <Text style={styles.text}>Planting Seeds of Growth</Text>
       
      </LinearGradient>
          </Animated.View>
        
        
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