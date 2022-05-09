import React, { useEffect } from 'react';
import {View, Text, SearchBox} from 'react-native'
import HomeScreen from './src/views/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Modules from './src/views/Modules';
import SearchInput from './src/component/SearchInput';

const Stack = createNativeStackNavigator(); 
export default function App () {
return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"n>
        <Stack.Screen
          name="Home"
          component={HomeScreen}  
          options={{
            
            header: () => null}}
        />
       <Stack.Screen
          name="Modules"
          component={Modules}  
          options={
            {
              headerStyle: {
                backgroundColor: '#DF8F8F',
                
              },
              headerTintColor: '#fff',
              headerTitle:()=> (
                   <SearchInput/>)
              
             // header: () =>null
             
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
);




};



