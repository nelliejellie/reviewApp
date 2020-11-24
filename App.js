

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AppLoading} from 'expo';
import { useFonts } from 'expo-font';
import Home from './screens/home';
import Details from './screens/details';
import About from './screens/about';
import { color } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';




// stack navigator variable
const Stack = createStackNavigator();

// drawer navigator variable
const Drawer = createDrawerNavigator();



function HomeAndDetails() {
  // loading a new font into the app
  let [fontsLoaded] = useFonts({
       'Biggie': require('./assets/fonts/BigShouldersStencilText-Black.ttf'),
     });

  if (fontsLoaded){
    return (
      <Stack.Navigator
        screenOptions={{
          title:'home',
          headerStyle:{
            backgroundColor:'#968888',
          },
          headerTitleStyle:{
            fontFamily:'Biggie',
          }
        }}
      >
        <Stack.Screen
        name="Home"
        component={Home}
        />
        <Stack.Screen name="Details" component={Details} options={({route})=>({title:route.params.title})} /> 
          
      </Stack.Navigator>
    );
  }
  return <AppLoading />
    

  }

  function App(){
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={HomeAndDetails}/>
          <Drawer.Screen name='about' component={About}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }

export default App;

//the function in stack.screen passes the data in the home.js and give the header of the details screen the title
// the screenOptions prop in stack.navigator sets a default styling option to the header of all screens and can be easily overriden
// by using an options prop in the stack.screen

// the navigation container should only be used in the app function