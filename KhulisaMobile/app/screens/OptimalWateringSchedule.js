import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function WateringSchedule() {
    const navigation = useNavigation();
    
    const regions = [
        { name: "Mediterranean Climate (Southwestern South Africa)", data: { plants: ['Grapes', 'Olives', 'Figs'], watering: { daily: 1, weekly: 7, monthly: 30 } }},
        { name: "Savanna Climate (Central Southern Africa)", data: { plants: ['Maize', 'Sorghum', 'Tropical Fruits'], watering: { daily: 2, weekly: 14, monthly: 60 } }},
        { name: "Tropical Rainforest Climate (Eastern Madagascar)", data: { plants: ['Bananas', 'Coffee', 'Spices'], watering: { daily: 3, weekly: 21, monthly: 90 } }},
        { name: "Desert Climate (Namib Desert, Namibia)", data: { plants: ['Succulents', 'Cacti', 'Drought-resistant Crops'], watering: { daily: 0.5, weekly: 3, monthly: 12 } }},
    ];

    return (
        <View style={styles.container}>
            {regions.map((region, index) => (
                <View key={index} style={styles.tile}>
                    <Text style={styles.tileText}>{region.name}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegionDetails', { region: region.data })}>
                        <MaterialIcons name="arrow-forward" size={24} color="#28a745" />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tile: {
        backgroundColor: '#d0f0c0',
        width: '80%',
        height: 150,
        padding: 20,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    tileText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        paddingRight: 10,
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
