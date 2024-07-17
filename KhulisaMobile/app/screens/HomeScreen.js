import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './Card';



const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
            <Text style={styles.heading}>User</Text>
            </View>
            <Card
          title="Crop Health Insights"
          description="Boost crop health and yield with expert advice. Optimize resources for better productivity..."
          imageSource={require('../../assets/water-plant-growth.jpg')}
          onPress={() => console.log('Anonymous Reporting')}
        />
         <Card
          title="Climate Insights"
          description="Get real-time weather updates and alerts on cyclones, flooding, and droughts. Protect your crops"
          imageSource={require('../../assets/Sunshine-Coast-News-Cyclone-Main.jpg')}
          onPress={() => console.log('Anonymous Reporting')}
        />
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    cardContent: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    cardDescription: {
        fontSize: 14,
        color: '#fff',
    },
    heading:{
        marginTop: 10,
        fontSize: 25,
        color: 'rgb(0, 140, 39)',
        
        
    },
    head: {
        paddingBottom: 20,
        paddingTop: 10,
        width: '100%',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android shadow
        alignItems: 'center',
    },
});

export default HomeScreen;
