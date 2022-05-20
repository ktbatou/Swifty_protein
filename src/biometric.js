import React, { useEffect } from  'react'
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
 
import FingerprintScanner from 'react-native-fingerprint-scanner';
import styles from './FingerprintPopup.component.styles';
import ShakingText from './ShakingText.component';
export default function Fingerprint(){


   const authCurrent = ()=> {
        FingerprintScanner
          .authenticate({
            onAttempt: this.handleAuthenticationAttemptedLegacy,
             title: 'Log in with Biometrics' })
          .then(() => {
            Alert.alert('Fingerprint Authentication', 'Authenticated succesfully')
          }).catch((error)=>{
            Alert.alert('Fingerprint Authentication', error.message)
          });
      } 
    handleAuthenticationAttemptedLegacy = (error) => {
   
        this.setState({ errorMessageLegacy: error.message });
        this.description.shake();
      };
    //  useEffect(()=>{authCurrent}, []);

    return (
        <View style={styles.container}>
        <View style={[styles.contentContainer]}>
          <Text style={styles.heading}>
            Biometric{'\n'}Authentication
          </Text>
          <ShakingText
            ref={(instance) => { this.description = instance; }}
            style={styles.description(!!errorMessageLegacy)}>
            {errorMessageLegacy || `Scan your ${biometricLegacy} on the\ndevice scanner to continue`}
          </ShakingText>
 
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePopupDismissedLegacy}
          >
            <Text style={styles.buttonText}>
              BACK TO MAIN
            </Text>
          </TouchableOpacity>
 
        </View>
      </View> 
    )
}