/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image
} from 'react-native';
import SearchProperty from './Screens/SearchProperty';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Images } from './Utils/Image';
import Home from './Screens/Home';
import BookMark from './Screens/BookMark';
import Chat from './Screens/Chat';
import Profile from './Screens/Profile';

 const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();

 const Tab2 = () => {

  return (
    

    <Tab.Navigator
      
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: 'white' }}
      initialRouteName={'Home'}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 25, height: 25 }}
              source={Images.Home} />
          ),
        }} />

      <Tab.Screen
        name='BookMark'
        component={BookMark}
        options={{
          headerShown: false,
          tabBarLabel: 'BookMark',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 25, height: 25 }}
              source={Images.Bookmark} />
          ),
        }} />


      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 25, height: 25 }}
              source={Images.Chat} />

          ),
        }} />
         <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 25, height: 25 }}
              source={Images.Profile} />

          ),
        }} />
    </Tab.Navigator>
  )
}


 const Mainstack = () => {

  return (
    <Stack.Navigator initialRouteName='HomeScreen'
    >
      <Stack.Screen name='HomeScreen' component={Tab2} options={{ headerShown: false }} />
      <Stack.Screen name='SearchProperty' component={SearchProperty} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
     <NavigationContainer>
      <Mainstack/>
     </NavigationContainer>
    );
};



export default App;
