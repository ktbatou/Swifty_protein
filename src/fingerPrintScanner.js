import React from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function FingerprintAuth(navigation) {
  return FingerprintScanner.authenticate({
    onAttempt: () => {
      console.log('an error');
    },
    title: 'Log in with Biometrics',
  })
    .then(() => {
      console.log('finger scanned');
      Alert.alert('Fingerprint Authentication', 'Authenticated successfully', [
        {
          text: 'OK',
          onPress: () =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Modules'}],
            }),
        },
      ]);
    })
    .catch(error => {
      console.log('fingerprint scanner error');
      Alert.alert(
        'Fingerprint Authentication',
        error.message,
        // [
        //   {
        //     text: 'OK',
        //     onPress: () =>
        //       navigation.reset({
        //         index: 0,
        //         routes: [{name: 'Home'}],
        //       }),
        //   },
        // ]
      );
    });
}
