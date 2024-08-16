import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [
    {
        id: '1',
        title: 'Drip Irrigation',
        content: 'Drip irrigation is efficient. Monitor soil moisture and consider rain forecasts to avoid unnecessary irrigation.',
    },
    {
        id: '2',
        title: 'Crop Rotation',
        content: 'Continue with corn-soybean rotation to improve soil health and reduce pest and disease risk.',
    },
    {
        id: '3',
        title: 'WARNING!!!',
        content: 'The use of synthetic fertilizers, like nitrogen fertilizers, can harm your crops and contribute to water pollution. See tips for sustainable alternatives.',
    },
];

function CropHealthInsights() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardContent}>{item.content}</Text>
        </View>
    );

    return (
        <View style={styles.background}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 20,
        backgroundColor: '#CFF0A1',
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginTop:10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#008C27',
    },
    cardContent: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },
});

export default CropHealthInsights;
