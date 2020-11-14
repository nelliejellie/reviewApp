import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {globalStyles} from '../styles/global'


export default function Home({navigation}) {

  const MoveToAbout = () =>{
    navigation.navigate('About')
  }

  return (
    <View style={globalStyles.home}>
      <Text style={globalStyles.homeText}>Home Screen</Text>
      <Button onPress={MoveToAbout} title='go to about'/>
    </View>
  );
}

 // pass the navigation component as a prop and navigate to other screens
 // the navigation prop is passed down to any screen component