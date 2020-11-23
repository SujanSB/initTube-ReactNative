import React from 'react'
import { View, Text,Image,Dimensions } from 'react-native'
import {WebView} from 'react-native-webview'


export default function VideoPlayer({route}) {
    const {videoId,title,channel} =route.params
    return (
        <View style={{flex:1,marginTop:100}}>
    <Text style={{fontSize:18,color:"black",textAlign:"center",marginBottom:40}}>{channel}</Text>

                <View style={{width:"100%",height:280,}}>
                        <WebView
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{uri:`https://www.youtube.com/embed/${videoId}`}}
                        />

                       
                </View>

    <Text style={{fontSize:18,width:Dimensions.get('screen').width-80,marginTop:50}}>{title}</Text>
    <View style={{borderBottomWidth:1}}  />
        <Text style={{position:"absolute",bottom:5,right:5,}}>InvalidSB</Text>
        </View>
    )
}
