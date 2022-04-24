import React, { useEffect } from 'react';
import SignInButton from '../component/SignInButton'
import { Text, View, StyleSheet, Image} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeScreen (navigation) {
useEffect(()=>SplashScreen.hide());
return (
  <View style={styles.sectionContainer}>
    <View>
      <Image style={styles.moleculeImg} source={require('../../assets/images/molecule.png')}/>
    <Text style={styles.title}>Swifty Protein</Text>
    </View>
    <SignInButton />
   
  </View>
);
 
};

const styles = StyleSheet.create({
  sectionContainer: {
  flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-evenly'
    
  },
  highlight: {
    fontWeight: '700',
  },
  moleculeImg :{
    height: 150,
    width: 200,
  },
  Button:{
    width: 286,
    height: 38,
    BackgroundColor: '#F6B0B0',
  },
  title:{
    color: '#F6B0B0',
    fontSize: 24,
    fontFamily: 'Poppins-Light',
    alignSelf: 'center'
  }
});