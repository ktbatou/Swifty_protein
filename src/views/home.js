import React, {useEffect, useState, useRef} from 'react';
import SignInButton from '../component/SignInButton';
import {AppState, Text, View, StyleSheet, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import isSensorAvailable from '../SensorChecker';
import RNRestart from 'react-native-restart';
//TODO: check for finger print Sensor

export default function HomeScreen(navigation) {
  const appState = useRef(AppState.currentState);
  const [hasSensor, setHasSensor] = useState(false);

  useEffect(() => SplashScreen.hide());
  useEffect(() => {
    isSensorAvailable()
      .then(result => {
        console.log('this is results :', result);
        setHasSensor(true);
      })
      .catch(err => {
        console.log(err);
        setHasSensor(false);
      });

    // const subscription = AppState.addEventListener('change', nextAppState => {
    //   if (nextAppState === 'background') {
    //     RNRestart.Restart();
    //   }
    // });
  });

  return (
    <View style={styles.sectionContainer}>
      <View>
        <Image
          style={styles.moleculeImg}
          source={require('../../assets/images/molecule.png')}
        />
        <Text style={styles.title}>Swifty Protein</Text>
      </View>
      {hasSensor == true ? <SignInButton /> : <View></View>}
    </View>
  );
}

props => jsx;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  highlight: {
    fontWeight: '700',
  },
  moleculeImg: {
    height: 150,
    width: 200,
  },
  Button: {
    width: 286,
    height: 38,
    BackgroundColor: '#F6B0B0',
  },
  title: {
    color: '#F6B0B0',
    fontSize: 24,
    fontFamily: 'Poppins-Light',
    alignSelf: 'center',
  },
});
