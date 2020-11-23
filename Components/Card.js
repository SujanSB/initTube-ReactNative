import React from 'react'
import { View, Text,Image,Dimensions ,TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import {useNavigation} from '@react-navigation/native'

export default function Card(props) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('vieoplayer',{videoId:props.videoId,title:props.title,channel:props.channel})}>
        <View  style={{elevation:3,marginBottom:20}} >
            <Image 
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={{
                width:"100%",
                height:220
                
            }}
            />
        <View style={{display:"flex",flexDirection:"row",margin:10}}>
            <View>
                <MaterialIcons name="account-circle" size={45} color="gray"/>
            </View>
            <View style={{marginLeft:10,display:"flex",flexDirection:"column"}}>
                <Text  style={{fontSize:16,color:"white",width:Dimensions.get('screen').width-80}} ellipsizeMode="tail" numberOfLines={1}>
                {props.title}                </Text>
                <Text style={{fontSize:12,width:'80%',color:"white"}}>- {props.channel}</Text>
            </View>
        </View>



        </View>
        </TouchableOpacity>
    )
}
