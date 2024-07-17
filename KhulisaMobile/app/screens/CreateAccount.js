import { useState } from 'react';
import React from 'react';
import { View, Text, Button,TextInput, StyleSheet, Image, TouchableOpacity , Keyboard,TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CreateAccount = ({navigation}) => {
    const [username, setUsername,] = useState('');
    const [useremail, setUserEmail,] = useState('');
    const [createPassword, setNewPassword] = useState('');
    const [confirmPassword, setPassword] = useState('');
  
    const handleHome = () => {
      
      if (useremail === '' && createPassword === '') {
        navigation.navigate('Home');
        Keyboard.dismiss(); 
      } else {
        alert('Invalid credentials');
         
      }
    };
    const handleLogin = () => {
        navigation.navigate('Login');
    };
    const dismissKeyboard = () => {
        Keyboard.dismiss(); // Function to dismiss keyboard when tapping outside TextInput
      };
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image source={require('../../assets/KHULISA-removebg-preview.png')} style={styles.logo}/>
        <TextInput style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Name"/>
        <TextInput style={styles.input2}
        value={useremail}
        onChangeText={setUserEmail}
        placeholder="Email"/>
        <TextInput style={styles.input3}
        value={createPassword}
        onChangeText={setNewPassword}
        placeholder="Create Password"/>
        <TextInput style={styles.input4}
        value={confirmPassword}
        onChangeText={setPassword}
        placeholder="Confirm Password"/>
          <LinearGradient
        colors={['#7AE844', 'rgb(0, 140, 39)']}
        locations={[0, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.linearGradient}
  
      >
       <TouchableOpacity onPress={handleHome}>
            <Text style={styles.createAcc}>Create Account</Text>
        </TouchableOpacity>
        
       
      </LinearGradient>
        <Text style= {styles.or}>OR</Text>
        <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        
      </View>
      
      </TouchableWithoutFeedback>
      </ScrollView>
      </KeyboardAvoidingView>
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
        top: -70,
        paddingHorizontal: 8,
        width: 260,
        borderRadius: 10,
      },
      input2: {
        height: 40,
        borderColor: '#008C27',
        borderWidth: 2,
        top: -55,
        paddingHorizontal: 8,
        width: 260,
        borderRadius: 10,
      },
      input3: {
        height: 40,
        borderColor: '#008C27',
        borderWidth: 2,
        top: -40,
        paddingHorizontal: 8,
        width: 260,
        borderRadius: 10,
      },
      input4: {
        height: 40,
        borderColor: '#008C27',
        borderWidth: 2,
        top: -27,
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
      createAcc:{
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
      login:{
        marginTop: 20,
        color: '#008C27',
        fontSize: 21,
        
      },
     
  });

export default CreateAccount;

