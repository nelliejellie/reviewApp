import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../styles/global'

export default function About() {
    return (
      <View style={globalStyles.home}>
        <Text style={globalStyles.homeText}>About Screen</Text>
      </View>
    );
  }