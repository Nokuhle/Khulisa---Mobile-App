import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CropHealthInsights(){
    return (
        <>
        <ImageBackground  
        source={require('../../assets/maize.jpeg')} 
        style={styles.background} 
        imageStyle={{ opacity: 0.8 }}>
        <ScrollView style={styles.overlay}>
            <Text style={styles.text}>Planting Date</Text>
            <TextInput style={styles.input} placeholder='Enter the plant starting date'></TextInput>
            <Icon name='calendar' size={20} color={'#008C27'} style={styles.icon}/>
            <Text style={styles.text}>Crop Type</Text>
            <TextInput style={styles.input} placeholder='i.e Maize, Wheat, Tomatoes, etc'></TextInput>
            <Icon name='' size={20} color={'#008C27'} style={styles.icon}/>
            <Text style={styles.text}>Region</Text>
            <TextInput style={styles.input} placeholder='Select your region i.e Gauteng'></TextInput>
            <Icon name='calendar' size={20} color={'#008C27'} style={styles.icon}/>
            <Text style={styles.text}>Irrigation Method</Text>
            <TextInput style={styles.input} placeholder='i.e drip, sprinkler, flood'></TextInput>
            <Icon name='calendar' size={20} color={'#008C27'} style={styles.icon}/>
            <Text style={styles.text}>Fertiliser Usage</Text>
            <TextInput style={styles.input} placeholder='Select your fertilizer type(s)'></TextInput>
            <Icon name='calendar' size={20} color={'#008C27'} style={styles.icon}/>
            <Text style={styles.text}>Pest and Disease History</Text>
            <TextInput style={styles.input} placeholder='Describe any past pest or disease issues.'></TextInput>
            <Icon name='calendar' size={20} color={'#008C27'} style={styles.icon}/>
            <Text style={styles.text}>Crop Rotation Practices</Text>
            <TextInput style={styles.input} placeholder='Describe your crop rotation practices.'></TextInput>
            <Icon name='calendar' size={20} color={'#008C27'} style={styles.icon}/>
        </ScrollView>
        </ImageBackground>
        
        </>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    overlay:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%'
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20,
        marginLeft: 10,
    },
    input:{
        backgroundColor: 'white',
        marginTop: 10,
        padding: 15,
        width: 330,
        marginLeft: 25,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#008C27',

    },
    icon:{
        left: 320,
        bottom: 36,
    }
})
export default CropHealthInsights