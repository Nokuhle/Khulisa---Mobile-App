import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
    const handleClimateAlerts = () => {
        navigation.navigate('Climate Alerts');
    };
	const handleCropHealthInsights = () => {
        navigation.navigate('Crop Health Insights');
    };
	return (
		<View style={styles.container}>
			<View style={styles.card_cont}>
			<Card
				title="Crop Health Insights"
				description="Boost crop health and yield with expert advice. Optimize resources for better productivity..."
				imageSource={require("../../assets/water-plant-growth.jpg")}
				onPress={handleCropHealthInsights}
			/>
			<Card
				title="Climate Alerts"
				description="Get real-time weather updates and alerts on cyclones, flooding, and droughts. 
                Protect your crops!"
				imageSource={require("../../assets/Sunshine-Coast-News-Cyclone-Main.jpg")}
				onPress={handleClimateAlerts}
			/>
			<Card
				title="Optimal Watering Schedule"
				description="Get personalized watering times based on weather forecasts. 
                Save water and keep plants healthy."
				imageSource={require("../../assets/How-to-Water-Plants.jpg")}
				onPress={() => console.log("Climate Insights")}
			/>
		</View>
	</View>
			
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
	},
	heading: {
		marginTop: 2,
        marginLeft: 80,
		fontSize: 22,
		color: "rgb(0, 140, 39)",
        
	},
    bars:{
        marginLeft: 15,

    },
	card_cont:{
		marginTop:20,
	},
	
});

export default HomeScreen;
