import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const tips = [
    {
        id: '1',
        title: 'Soil Management',
        content: 'Test soil regularly to maintain balanced nutrients, especially nitrogen, to prevent over-fertilization and environmental harm.',
    },
    {
        id: '2',
        title: 'Maize Moisture',
        content: 'Maize in Gauteng needs soil moisture at 60-70% during early growth & grain filling, and 70-80% during tasseling and silking for optimal yield.',
    },
    {
        id: '3',
        title: 'Eco Boost!',
        content: 'Did you know you can use vegetable peels and kitchen scraps as organic compost? Another organic option is using manure or composted leaves for nutrient-rich soil. Embrace eco-friendly fertilizing methods.',
    },
];

const MyTipsScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardContent}>{item.content}</Text>
        </View>
    );

    return (
        <View style={styles.background}>
            <FlatList
                data={tips}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 20,
        backgroundColor: '#CFF0A1', // Same background color as CropHealthInsights
    },
    card: {
        backgroundColor: '#FFFFFF', // Card color white
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#008C27', // Text color as specified
    },
    cardContent: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },
});

export default MyTipsScreen;
