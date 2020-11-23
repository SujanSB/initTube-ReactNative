import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home'
import Search from './Screens/Search'
import VideoPlayer from './Screens/VideoPlayer'
import Explore from './Screens/Explore'
import About from './Screens/About'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from './reducers/reducer'


const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()


const RootHome=()=>{
  return(
  <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color }) => {
      let iconName;

      if (route.name === 'home') {
        iconName = 'home';
      } else if (route.name === 'explore') {
        iconName ='explore' ;
      }
       else if (route.name === 'about') {
        iconName ='developer-mode' ;
      }

      // You can return any component that you like here!
      return <MaterialIcons name={iconName} size={32} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'aqua',
    inactiveTintColor: 'gray',
  }}
  >
    <Tabs.Screen name="home" component={Home} />
    <Tabs.Screen name="explore" component={Explore}/>
    <Tabs.Screen name="about" component={About}/>
  </Tabs.Navigator>
  )
}


export default function App() {
  return (
   <Provider store ={store}>
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="vieoplayer" component={VideoPlayer} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
