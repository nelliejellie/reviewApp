import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button } from 'react-native';
import {globalStyles} from '../styles/global'


export default function Home({navigation}) {
  const [tvshows, setTvshow] = useState([
    {title:'blood of zeus', detail:'animation on zeus son', key: '1', rating: '4'},
    {title:'helstrom', detail:'a movie on family possesion', key: '2', rating: '2'},
    {title:'tough love', detail:'a nigerian soap opera about two beautiful girls', key: '3', rating: '3'},
  ])
  console.log(tvshows)
  const MoveToAbout = () =>{
    navigation.navigate('Details')
  }

  return (
    <View style={globalStyles.home}>
      <FlatList
        data = {tvshows}
        renderItem = {({item})=>(
          // the onPress function in the touchbleOpacity takes the item info and sends it to the details screen
          <TouchableOpacity onPress={()=>(navigation.navigate('Details', item))}> 
            <Text style={globalStyles.homeText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Button title='click' onPress={()=>{navigation.navigate('Details')}}/> */}
    </View>
  );
}

 // pass the navigation component as a prop and navigate to other screens
 // the navigation prop is passed down to any screen component