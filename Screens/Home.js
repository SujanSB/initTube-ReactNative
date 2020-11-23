import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../Components/Header'
import Card from '../Components/Card'
import {useSelector} from 'react-redux'


export default function Home({navigation}) {
  const cardData =useSelector(state=>{
    return state
  })
  return (
    <View style={styles.container}>
        <Header />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop:30
  },
});
