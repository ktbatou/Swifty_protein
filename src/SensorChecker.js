import {Component} from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';

export default function isSensorAvailable() {
  return new Promise((resolve, reject) => {
    FingerprintScanner.isSensorAvailable()
      .then(biometryType => {
        //    console.log('this is the type ', biometryType);
        resolve(biometryType);
      })
      .catch(error => {
        //  console.log(error.message);
        reject('MyPromise catch :', error);
      });
  });
}
