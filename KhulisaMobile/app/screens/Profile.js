import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ({ navigation }) => {
    const [profile, setProfile] = useState({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        role: 'Software Developer',
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [tempProfile, setTempProfile] = useState(profile);

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    const handleEditProfile = () => {
        setTempProfile(profile);
        setModalVisible(true);
    };

    const handleSave = () => {
        setProfile(tempProfile);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileSection}>
                <Image
                    source={require('../../assets/depositphotos_137014128-stock-illustration-user-profile-icon.jpg')}
                    style={styles.profilePicture}
                />
            </View>

            <View style={styles.infoTable}>
                <View style={styles.tableRow}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>{profile.name}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{profile.email}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.label}>Role:</Text>
                    <Text style={styles.value}>{profile.role}</Text>
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonEdit} onPress={handleEditProfile}>
                    <Icon name="edit" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogOut} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Profile</Text>
                        
                        <Text style={styles.label}>Name:</Text>
                        <TextInput 
                            style={styles.input} 
                            value={tempProfile.name}
                            onChangeText={(text) => setTempProfile({ ...tempProfile, name: text })}
                        />
                        
                        <Text style={styles.label}>Email:</Text>
                        <TextInput 
                            style={styles.input} 
                            value={tempProfile.email}
                            onChangeText={(text) => setTempProfile({ ...tempProfile, email: text })}
                        />
                        
                        <Text style={styles.label}>Role:</Text>
                        <TextInput 
                            style={styles.input} 
                            value={tempProfile.role}
                            onChangeText={(text) => setTempProfile({ ...tempProfile, role: text })}
                        />

                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E9F7EF', // Light green background
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        flex: 1,
    },
    profilePicture: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderColor: '#28A745', // Green border
        borderWidth: 3,
    },
    infoTable: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        color: '#28A745', // Green text
    },
    value: {
        fontSize: 18,
        color: '#555',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
    },
    buttonEdit: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007BFF', // Blue button
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginRight: 10,
    },
    buttonLogOut: {
        backgroundColor: '#DC3545', // Red button
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        marginLeft: 8,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 320,
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 10,
        elevation: 10,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#28A745',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonSave: {
        backgroundColor: '#28A745', // Green button
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        marginRight: 5,
    },
    buttonCancel: {
        backgroundColor: '#DC3545', // Red button
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        marginLeft: 5,
    },
});

export default ProfileScreen;
