import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from './BottomTabNavigator';
function CropHealthInsights(){
    return (
        <>
        <View style={styles.background}>
            <View style={styles.container}>

            <Icon name='happy-outline' size={70} style={styles.icon}/>
            <Text style={styles.text}>Hmm...this section is empty, enter your crop details in ‘My Crops’.</Text>
            </View>
           
           
        </View>
        
        </>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
       backgroundColor:'#CFF0A1',
       

    },
    overlay:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%'
    },
    container:{
        alignItems: 'center',
        marginTop: 100,
        padding: 25,
    },
    text:{
        color: '#008C27',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20,
        marginLeft: 10,
        textAlign:'center'
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
        color: '#008C27',
    }
})
export default CropHealthInsights