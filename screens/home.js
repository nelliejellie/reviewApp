import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList, Button, Modal } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import ReviewForm from './reviewForm';


export default function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)
  const [tvshows, setTvshow] = useState([
    {title:'blood of zeus', detail:'animation on zeus son', key: '1', rating: '4'},
    {title:'helstrom', detail:'a movie on family possesion', key: '2', rating: '2'},
    {title:'tough love', detail:'a nigerian soap opera about two beautiful girls', key: '3', rating: '3'},
  ])
  // function to move from the home to the details page
  const MoveToAbout = () =>{
    navigation.navigate('Details')
  }

  // function to set the modal
  const closeModal = () =>{
    setModalVisible(!modalVisible)
  }

  // function to add a new review
  const addTvshow = (tvshow) =>{
    tvshow.key = Math.random().toString();
    setTvshow((currentTvshows)=>{
      return [tvshow,...currentTvshows]
      
    })
    setModalVisible(false)
  }
  return (
    <View style={globalStyles.home}>
      <Modal
        visible={modalVisible}
      >
        <View style={globalStyles.modalContent}>
          <MaterialIcons name="cancel" size={30} color="black" onPress={closeModal} />
          <ReviewForm addTvshow={addTvshow}/>   
        </View>
      </Modal>
      <FlatList
        data = {tvshows}
        renderItem = {({item})=>(
          // the onPress function in the touchbleOpacity takes the item info and sends it to the details screen
          <TouchableOpacity onPress={()=>(navigation.navigate('Details', item))}> 
            <Card>
              <Text style={globalStyles.homeText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <View style={globalStyles.centreIcon}>
        <Ionicons name="md-add" size={30} color="black" onPress={closeModal} />
      </View>
    </View>
  );
}

 // pass the navigation component as a prop and navigate to other screens
 // the navigation prop is passed down to any screen component