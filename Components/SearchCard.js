import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'

import {useNavigation} from '@react-navigation/native'

const SearchCard=(props)=> {
    const navigation = useNavigation()

    return ( 
       <TouchableOpacity onPress={()=>navigation.navigate('vieoplayer',{videoId:props.videoId,title:props.title},)}>

      
        <View  style={{margin:5,marginBottom:10,backgroundColor:"white",borderColor:'gray', height:120,borderWidth:0.5, display:"flex",flexDirection:"row",}}>
            <Image 
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={{
                width:"45%",
                height:120,
                backgroundColor:"red"
            }}

            />
                <View style={{margin:5,width:"55%"}}>
                     
                     <View style={{marginLeft:10,display:"flex",flexDirection:"column"}}>
                        <Text  style={{fontSize:14,color:"black",width:"85%",marginBottom:10}} ellipsizeMode="tail" numberOfLines={3}>
                                {props.title}
                        </Text>
                        <Text style={{fontSize:12,width:'80%',color:"black"}}>
                           - {props.channel}
                        </Text>
                    </View>
        </View>



        </View>
        </TouchableOpacity>
    )
}
export default SearchCard