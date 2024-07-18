import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';

const ClimateAlertScreen = () => {
    const [location, setLocation] = useState('');
    const [region, setRegion] = useState(null);

    const fetchWeatherData = async (location) => {
        try {
            const apiKey = 'Dv5dNbICLCyGfggSlgUEIjSV3yyPPfXp';
            const response = await fetch(`https://api.windy.com/api/point-forecast/v2?lat=${location.lat}&lon=${location.lon}&key=${apiKey}`);
            const data = await response.json();
            
            setRegion({
                latitude: location.lat,
                longitude: location.lon,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleLocationSubmit = () => {
        // Assuming location input is a comma-separated string of lat, lon
        const [lat, lon] = location.split(',').map(Number);
        fetchWeatherData({ lat, lon });
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss(); // Function to dismiss keyboard when tapping outside TextInput
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <ImageBackground 
                        source={require('../../assets/cyclone.jpg')} 
                        style={styles.background} 
                        imageStyle={{ opacity: 0.7 }}
                    >
                        <View style={styles.overlay}>
                            <View style={styles.head}>
                                <Icon name="bars" size={30} color="#008c27" style={styles.bars} />
                                <Text style={styles.heading}>Climate Alerts</Text>
                            </View>
                            <View style={styles.search}>
                                <TextInput
                                    style={styles.input}
                                    value={location}
                                    onChangeText={setLocation}
                                    placeholder="Enter your location (lat,lon)"
                                />
                                <Icon name="search" size={30} color="#008c27" style={styles.search_icon} onPress={handleLocationSubmit} />
                            </View>
                            <Button title="Fetch Data" onPress={handleLocationSubmit} />
                            {region && (
                                <MapView
                                    style={styles.map}
                                    region={region}
                                >
                                    <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                                </MapView>
                            )}
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
    },
    bars: {
        marginLeft: 15,
    },
    heading: {
        fontSize: 22,
        color: 'rgb(0,140,39)',
        fontWeight: 'bold',
        marginLeft: 40,
    },
    head: {
        paddingBottom: 15,
        paddingTop: 15,
        width: '100%',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        height: 40,
        borderColor: '#008C27',
        borderWidth: 2,
        top: 20,
        paddingHorizontal: 8,
        width: 260,
        borderRadius: 10,
        backgroundColor: 'white',
        marginLeft: 35,
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
    },
    search_icon: {
        marginLeft: 10,
        top: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
    },
    map: {
        width: '100%',
        height: 300,
        marginTop: 20,
    },
});

export default ClimateAlertScreen;
