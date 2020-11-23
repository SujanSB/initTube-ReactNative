import React from 'react'
import { View, Text } from 'react-native'
import { Fontisto } from '@expo/vector-icons';

export default function About() {
    return (
        <View style={{flex:1,backgroundColor:"#001161",justifyContent:"center",marginTop:30,alignItems:"center",borderColor:"white",borderWidth:2}}>
            <Fontisto name="person" size={54} color="cyan" />
            <Text style={{color:"white",fontSize:30}}>Developed By</Text>
            <Text style={{color:"cyan",fontSize:30}}>Sujan Bhatarai</Text>
            <Text style={{color:"black",position:"absolute",bottom:10,right:10,fontSize:10,backgroundColor:"cyan",padding:5}}>Made with react native</Text>
        </View>
    )
}
