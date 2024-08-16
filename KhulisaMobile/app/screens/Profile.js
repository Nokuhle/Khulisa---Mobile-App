import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProfileScreen = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.profile_cont}>
                <Image source={require('../../assets/depositphotos_137014128-stock-illustration-user-profile-icon.jpg')} style={styles.profile_picture}/>
            </View>
            <Text style={styles.name}>Jane Doe</Text>
            <Icon name='edit' size={20} style={styles.icon}/>
            <TouchableOpacity style={styles.buttonDelete}>
                <Text style={styles.button_text}>Delete Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogOut}>
                <Text style={styles.button_text}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    profile_picture:{
        width: 150,
        height:150,
        borderRadius:100,
        shadowColor: "black",
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.40,
		shadowRadius: 3.84,
		elevation: 5,
    },
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#79D34D',
        
    },
    profile_cont:{
        marginTop: 50,
    },
    name:{
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'rgb(0, 140, 39)',
    },
    icon:{
        left: 65,
        bottom: 20,
        color: 'rgb(0, 140, 39)',
    },
    buttonLogOut:{
        padding: 15,
        backgroundColor: 'rgb(0, 140, 39)',
        borderRadius: 10,
        width: 140,
        alignItems: 'center',
    },
    buttonDelete:{
        backgroundColor: 'red',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        width: 140,
        alignItems: 'center',
    },
    button_text:{
        color: 'white',
        fontWeight: 'bold',
    },
})
export default ProfileScreen;