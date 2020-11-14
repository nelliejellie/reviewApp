// import React, {useState} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from './screens/home';
// import {AppLoading} from 'expo';
// import { useFonts } from 'expo-font';
// //import Navigator from './routes/homeStack'
// import { createStackNavigator } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';

// const Stack = createStackNavigator();


// export default function App() {
//  // function for loading fonts
// let [fontsLoaded] = useFonts({
//   'Biggie': require('./assets/fonts/BigShouldersStencilText-Black.ttf'),
// });

//   if(fontsLoaded){
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }else{
//     return(
//       <AppLoading/>
//     )
//   }
  
// }

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AppLoading} from 'expo';
import { useFonts } from 'expo-font';
import Home from './screens/home';
import About from './screens/about';




const Stack = createStackNavigator();



function App() {
  // loading a new font into the app
  let [fontsLoaded] = useFonts({
       'Biggie': require('./assets/fonts/BigShouldersStencilText-Black.ttf'),
     });

  if (fontsLoaded){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return <AppLoading />
    

  }

export default App;

