import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {globalStyles} from '../styles/global'

export default function Details({navigation, route}) {
    return (
      <View style={globalStyles.home}>
        <Text style={globalStyles.homeText}>{route.params.title}</Text>
        <Text style={globalStyles.homeText}>{route.params.detail}</Text>
        
      </View>
    );
  }