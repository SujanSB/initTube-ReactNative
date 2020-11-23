import React,{useState}from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView,Image,FlatList,ActivityIndicator  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import SearchCard from '../Components/SearchCard';

import {useSelector,useDispatch} from 'react-redux'


export default function Search({navigation}) {
    const [val,setVal]=useState('')
    // const [searchcardData,setcardData]=useState([])
    const dispatch = useDispatch()
    const searchcardData= useSelector(state=>{
      return state
    })
    const [loading,setLoading]=useState(false)
    const fetchData= ()=>{
      setLoading(true)
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${val}&type=video&key=AIzaSyB5z-WhcQB11Ok5VWdYRaCJUI-ijjR0HlE`)
      .then(res=>res.json())
      .then(data=>{
        setLoading(false)
        // setcardData(data.items)
        dispatch({type:"add",payload:data.items})
        console.log(data)
      })
    }


    return (
        <View style={styles.container} >
          <View style={{height:65,color:"white",margin:0,padding:10,display:'flex',flexDirection:"row",backgroundColor:"black",justifyContent:"space-between",alignItems:"center",levation:4,}}>

             <MaterialIcons name="arrow-back" size={35} color="white"
             onPress={()=>{
               navigation.goBack()
             }}
             />
             <TextInput
             style={{backgroundColor:"#232323",width:"70%",margin:0,padding:8,borderRadius:10,color:"white",fontSize:16}}
             value={val}
             onChangeText={(text)=>setVal(text)}
             placeholder="Search Here..."
             />
             
             <MaterialIcons name="send" size={35} color="white" onPress={()=>fetchData()}/>
        </View>
        {loading ?
        <ActivityIndicator style={{marginTop:30}} size="large" color="cyan"/> : null }
        <FlatList
            data= {searchcardData}
            renderItem={({item})=>{
              return <SearchCard
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
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      marginTop:30
    },
  });