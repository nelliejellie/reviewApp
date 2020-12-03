import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, FlatList, Button, Modal } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import ReviewForm from './reviewForm';


export default function Home({navigation}) {
  // usestate function for the modal
  const [modalVisible, setModalVisible] = useState(false)

  // usestate function for an object i created in the frontend
  const [tvshows, setTvshow] = useState([
    {title:'blood of zeus', detail:'animation on zeus son', key: '1', rating: '4'},
    {title:'helstrom', detail:'a movie on family possesion', key: '2', rating: '2'},
    {title:'tough love', detail:'a nigerian soap opera about two beautiful girls', key: '3', rating: '3'},
  ])

  // usestate function for reading objects from an api
  const [users, setUsers] = useState([])

  useEffect(function(){
    console.log('data')
    getData()
  }, [])
  
  //async function to get data
  const getData = async()=>{
    var res =  await fetch('http://jsonplaceholder.typicode.com/users/')
    //var res =  await fetch('http://jsonplaceholder.typicode.com/users/1')
    var users =  await res.json()
    setUsers(users)
    console.log(users)
  }
  
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
      {/* the modal component */}
      <Modal
        visible={modalVisible}
      >
        <View style={globalStyles.modalContent}>
          <MaterialIcons name="cancel" size={30} color="black" onPress={closeModal} />
          <ReviewForm addTvshow={addTvshow}/>   
        </View>
      </Modal>

      {/* the flatlist component */}
      {/* <FlatList
        data = {tvshows}
        renderItem = {({item})=>(
          // the onPress function in the touchbleOpacity takes the item info and sends it to the details screen
          <TouchableOpacity onPress={()=>(navigation.navigate('Details', item))}> 
            <Card>
              <Text style={globalStyles.homeText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      /> */}

      <FlatList
        data = {users}
        renderItem = {({item})=>(
          // the onPress function in the touchbleOpacity takes the item info and sends it to the details screen
          <TouchableOpacity onPress={()=>(navigation.navigate('Details', item))}> 
            <Card>
              <Text style={globalStyles.homeText}>{item.name}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />

      {/* the icons component */}
      <View style={globalStyles.centreIcon}>
        <Ionicons name="md-add" size={30} color="black" onPress={closeModal} />
      </View>

    </View>
  );
}

 // pass the navigation component as a prop and navigate to other screens
 // the navigation prop is passed down to any screen component