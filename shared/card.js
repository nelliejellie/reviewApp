import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card(props) {
    return (
        <View style={Styles.card}>
            <View style={Styles.cardComponent}>
                {props.children} 
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,
    },
    cardComponent:{
        marginHorizontal:18,
        marginVertical:10,
    }
})

// this card component cn be inherited by any screen or component in your app