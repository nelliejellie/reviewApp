import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default function Details({navigation, route}) {

  const myRating = route.params.rating
    return (
      <Card>
        <View style={globalStyles.home}>
            <Text style={globalStyles.homeText}>{route.params.title}</Text>
            <Text style={globalStyles.homeText}>{route.params.detail}</Text>
            <View style={globalStyles.ratingView}>
              <Text style={globalStyles.homeText}>rating -</Text>
              <Image source={images.ratings[myRating]} style={globalStyles.image} /> 
            </View>  
        </View>
      </Card>
    );
  }

  // the source props of the image component doesnt allow string concatenation
  // so an object is create in the created and exported in to this module holding the images location 