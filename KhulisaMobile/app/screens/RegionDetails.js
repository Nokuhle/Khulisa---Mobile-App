import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function RegionDetails({ route }) {
    const { region } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Plants & Watering Schedule</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Plant</Text>
                    <Text style={styles.tableHeader}>Watering Frequency</Text>
                </View>
                {region.plants.map((plant, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{plant}</Text>
                        <Text style={styles.tableCell}>
                            {`Daily: ${region.watering.daily}x\nWeekly: ${region.watering.weekly}x\nMonthly: ${region.watering.monthly}x`}
                        </Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f4f7',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2e7d32',
        textAlign: 'center',
    },
    table: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#388e3c',
    },
    tableCell: {
        fontSize: 16,
        color: '#555',
        textAlign: 'right',
    },
});
