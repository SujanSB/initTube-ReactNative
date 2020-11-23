import React from 'react'
import { View, Text,FlatList } from 'react-native'
import Header from '../Components/Header'
import Card from '../Components/Card'
import {useSelector} from 'react-redux'



const Explore=()=> {
    const cardData =useSelector(state=>{
        return state
      })
    return (
        <View style={{flex:1,marginTop:30,backgroundColor:"black"}}>
            <Header/>
            <FlatList
        data={cardData}
        renderItem={({item})=>{
            return <Card
            videoId= {item.id.videoId}
              title ={item.snippet.title}
              channel= {item.snippet.channelTitle}

            />
        }}
        
        keyExtractor={item=>item.id.videoId}
        />
        </View>
    )
}
export default Explore