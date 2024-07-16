import { useState } from 'react';
import React from 'react';
import { View, Text, Button,TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      
      if (username === '' && password === '') {
        navigation.navigate('Home');
      } else {
        alert('Invalid credentials');
      }
    };
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/KHULISA-removebg-preview.png')} style={styles.logo}/>
        <TextInput style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Email"/>
        <TextInput style={styles.input2}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"/>
          <LinearGradient
        colors={['#7AE844', 'rgb(0, 140, 39)']}
        locations={[0, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.linearGradient}
      >
       <TouchableOpacity>
            <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        
       
      </LinearGradient>
        <Text style= {styles.or}>OR</Text>
        <TouchableOpacity>
            <Text style={styles.sign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 24,
    },
    logo:{
        width: 400,
        height: 350,
        top: -30,
    },
    input: {
        height: 40,
        borderColor: '#008C27',
        borderWidth: 2,
        top: -50,
        paddingHorizontal: 8,
        width: 260,
        borderRadius: 10,
      },
      input2: {
        height: 40,
        borderColor: '#008C27',
        borderWidth: 2,
        top: -30,
        paddingHorizontal: 8,
        width: 260,
        borderRadius: 10,
      },
      linearGradient:{
        padding: 15,
        width: 200,
        alignItems: 'center',
        borderRadius: 15,

      },
      login:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      or:{
        color: '#008C27',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
      },
      sign:{
        marginTop: 20,
        color: '#008C27',
        fontSize: 25,
        
      },
     
  });

export default LoginScreen;

