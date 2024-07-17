// Card.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

const Card = ({ title, description, imageSource, onPress }) => {
  return (
    <ImageBackground source={{ uri: imageSource} }style={styles.card}>
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* {imageSource && <Image source={imageSource} style={styles.image} />} */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  card: {
    
    borderRadius: 10 ,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    width: 350,
    padding: 25,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardDescription: {
    fontSize: 14,
    color: 'white',
  },
});

export default Card;
