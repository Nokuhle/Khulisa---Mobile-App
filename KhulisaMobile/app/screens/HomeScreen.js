import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
    const handleClimateAlerts = () => {
        navigation.navigate('Climate Alerts');
    };
	return (
		<View style={styles.container}>
			<View style={styles.head}>
                <Icon name="bars" size={30} color="#008c27" style={styles.bars}/>

				<Text style={styles.heading}>User</Text>
			</View>
			<Card
				title="Crop Health Insights"
				description="Boost crop health and yield with expert advice. Optimize resources for better productivity..."
				imageSource={require("../../assets/water-plant-growth.jpg")}
				onPress={() => console.log("Crop Health Insights")}
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
	head: {
		paddingBottom: 15,
		paddingTop: 15,
		width: "100%",
		backgroundColor: "white",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
        display: 'flex',
        flexDirection: 'row',
		
	},
});

export default HomeScreen;
