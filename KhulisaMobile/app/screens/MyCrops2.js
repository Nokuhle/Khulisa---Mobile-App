import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function MyCrops2() {
    const [formData, setFormData] = useState({
        plantingDate: '',
        cropType: '',
        region: '',
        irrigationMethod: '',
        fertiliserUsage: '',
        pestHistory: '',
        cropRotation: '',
        yieldGoals: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <>
            <ImageBackground
                source={require('../../assets/maize.jpeg')}
                style={styles.background}
                imageStyle={{ opacity: 0.8 }}>
                <ScrollView style={styles.overlay}>
                    {!isSubmitted ? (
                        <>
                            <Text style={styles.text}>Planting Date</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Enter the plant starting date'
                                value={formData.plantingDate}
                                onChangeText={(value) => handleInputChange('plantingDate', value)}
                            />
                            <Icon name='calendar' size={20} color={'#008C27'} style={styles.icon} />

                            <Text style={styles.text}>Crop Type</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='i.e Maize, Wheat, Tomatoes, etc'
                                value={formData.cropType}
                                onChangeText={(value) => handleInputChange('cropType', value)}
                            />

                            <Text style={styles.text}>Region</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Select your region i.e Gauteng'
                                value={formData.region}
                                onChangeText={(value) => handleInputChange('region', value)}
                            />

                            <Text style={styles.text}>Irrigation Method</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='i.e drip, sprinkler, flood'
                                value={formData.irrigationMethod}
                                onChangeText={(value) => handleInputChange('irrigationMethod', value)}
                            />

                            <Text style={styles.text}>Fertiliser Usage</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Select your fertilizer type(s)'
                                value={formData.fertiliserUsage}
                                onChangeText={(value) => handleInputChange('fertiliserUsage', value)}
                            />

                            <Text style={styles.text}>Pest and Disease History</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Describe any past pest or disease issues.'
                                value={formData.pestHistory}
                                onChangeText={(value) => handleInputChange('pestHistory', value)}
                            />

                            <Text style={styles.text}>Crop Rotation Practices</Text>
                            <TextInput
                                style={styles.inputCropPractices}
                                placeholder='Describe your crop rotation practices.'
                                value={formData.cropRotation}
                                onChangeText={(value) => handleInputChange('cropRotation', value)}
                            />

                            <Text style={styles.text}>Yield Goals</Text>
                            <TextInput
                                style={styles.inputCropPractices}
                                placeholder='i.e 10ft per hectare'
                                value={formData.yieldGoals}
                                onChangeText={(value) => handleInputChange('yieldGoals', value)}
                            />

                            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                                <Text style={styles.submitButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                        <View style={styles.circle}>
                        
                        <Image source={require('../../assets/maize_294150416-removebg-preview.png')} style={styles.img}/>
                        <View style={styles.crop}>
                            <Text style={styles.summaryCrop}>Crop Type:</Text>
                            <Text style={styles.type}> {formData.cropType}</Text>
                        </View>
                        <View style={styles.dates}>
                            <Text style={styles.summaryDate}>Planting Date:</Text>
                            <Text style={styles.date}> {formData.plantingDate}</Text>
                        </View>
                        
                         </View>
                         <View style={styles.region}>
                            <Icon name='compass-outline' size={30} color={'#008C27'}/>
                            <Text style={styles.summaryRegion}>Region: {formData.region}</Text>
                         </View>
                         <View style={styles.items}>
                            <View style={styles.item}>
                                <Icon name='leaf'size={30} color={'#008C27'}/>
                                <Text style={styles.summaryItem}>{formData.fertiliserUsage}</Text>
                            </View>
                            <View style={styles.item}>
                                <Icon name='water' size={30} color={'#008C27'}/>
                                <Text style={styles.summaryItem}>{formData.irrigationMethod}</Text>
                            </View>
                            <View style={styles.item}>
                                <Icon name='flower' size={30} color={'#008C27'}/>
                             </View>
                         </View>
                         <View style={styles.items}>
                            <View style={styles.item}>
                            <Icon name='bug' size={30} color={'#008C27'}/>
                            <Text style={styles.summaryItem}>{formData.pestHistory}</Text>
                            </View>
                            <View style={styles.item}>
                            <Icon name='reload-circle' size={30} color={'#008C27'}/>
                            <Text style={styles.summaryItem}>{formData.cropRotation}</Text>
                            </View>
                            <View style={styles.item}>
                            <Icon name='disc-outline' size={30} color={'#008C27'}/>
                            <Text style={styles.summaryItem}>{formData.yieldGoals}</Text>
                             </View>
                         </View>

                        
                        </>
                        
                    )}
                </ScrollView>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    item:{
        backgroundColor:'#79D34D',
        padding: 20,
        width:100,
        height: 100,
        alignItems:'center',
        borderRadius: 10,
    },
    crop:{
        bottom: 100,
    },
    dates:{
        display: 'flex',
        flexDirection: 'row'
    },
    crop:{
        display: 'flex',
        flexDirection: 'row',
        bottom: 90
    },
    type:{
        fontSize: 18,
        top: 222,
        left: 20,
        color:'white',
        fontWeight:'bold',

    },
    date:{
        color:'white',
        fontSize: 16,
        fontWeight: 'bold',
        top: 230,
        left: 60,
    },
    items:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        bottom: 140,
        marginBottom: 10,
        
    },
    summaryRegion:{
        fontSize: 18,
        color: '#008C27',
        fontWeight: 'bold',
        
    },
    circle:{
        backgroundColor:'#79D34D',
        borderRadius: 200,
        height: 440,
        bottom:180,
    },
    region:{
        display: 'flex',
        flexDirection:'row',
        bottom: 150 ,
        marginLeft: 20,

    },
    summaryDate:{
        top:230,
        left: 60,
        fontSize: 16,
        color: '#008C27',
        fontWeight: 'bold'
    },
    summaryCrop:{
        top: 220,
        left: 20,
        color: '#008C27',
        fontSize: 20,
        fontWeight: 'bold'
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%',
    },
    img:{
        width: 100,
        height: 100,
        top: 255,
        left: 130,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10,
        marginLeft: 10,
    },
    input: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 15,
        width: 330,
        marginLeft: 25,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#008C27',
    },
    inputCropPractices: {
        backgroundColor: 'white',
        marginTop: 10,
        paddingLeft: 15,
        height: 200,
        width: 330,
        marginLeft: 25,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#008C27',
    },
    icon: {
        left: 320,
        bottom: 36,
    },
    submitButton: {
        backgroundColor: '#008C27',
        padding: 15,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
   
    summaryItem: {
        marginTop: 5,
        fontSize: 12,
        color:'#008C27',
        fontWeight:'bold',
    },
});

export default MyCrops2;
