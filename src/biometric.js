import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './FingerprintPopup.component.styles';
import ShakingText from './ShakingText.component';
export default function Fingerprint() {
  const FingerAuth = () => {
    FingerprintScanner.authenticate({title: 'Log in with Biometrics'}).then(
      () => {
        console.log('clicked');
      },
    );
  };

  console.log('test');
  r;
  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer]}>
        <Text style={styles.heading}>Biometric{'\n'}Authentication</Text>
        {/* <ShakingText
        ref={(instance) => { this.description = instance; }}
        style={styles.description(!!errorMessageLegacy)}>
        {errorMessageLegacy || `Scan your ${biometricLegacy} on the\ndevice scanner to continue`}
      </ShakingText> */}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => console.log(clicked)}>
          <Text style={styles.buttonText}>BACK TO MAIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
