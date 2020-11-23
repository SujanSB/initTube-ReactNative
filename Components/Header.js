import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Header() {

  const navigation = useNavigation()
  return (
    <View style={{height:52,color:"white",margin:0,padding:10,display:'flex',flexDirection:"row",justifyContent:"space-between",elevation:4,}}>
        <View style={{display:"flex",flexDirection:"row"}}>
        <SimpleLineIcons name="social-youtube" size={35} color="cyan" />
            <Text style={{fontSize:18,color:"#FFF",marginLeft:20,borderBottomColor:"cyan",borderBottomWidth:2}}>
                initTUBE
            </Text>
        </View>
        <View style={{display:"flex",flexDirection:"row"}}>
        <EvilIcons name="search" size={44} color="white" 
        onPress={()=>{navigation.navigate('search')}}
        style={{marginRight:20}}
        />
        <FontAwesome5 name="toggle-off" size={35} color="white" />

        </View>
        
    </View>

  );
}

const styles = StyleSheet.create({
 
});
