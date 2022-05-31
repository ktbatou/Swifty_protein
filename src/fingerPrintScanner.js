import React from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {Alert} from 'react-native';

export default function FingerprintAuth(navigation) {
  return FingerprintScanner.authenticate({
    onAttempt: () => {
      console.log('an error');
      console.log('');
    },
    title: 'Log in with Biometrics',
  })
    .then(() => {
      console.log('finger scanned');
      console.log('');
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
      console.log('');
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
    })
    .finally(() => FingerprintScanner.release());
}
