import React, { useEffect } from 'react';
import HomeScreen from './src/views/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModulesList from './src/views/ModulesList';

const Stack = createNativeStackNavigator(); 
export default function App () {
return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"n>
        <Stack.Screen
          name="Home"
          component={HomeScreen}  
          options={{header: () => null}}
        />
       <Stack.Screen
          name="Modules"
          component={ModulesList}  
          //options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
);
 
};



