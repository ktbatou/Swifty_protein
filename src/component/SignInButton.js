import React from 'react';
import {Alert, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FingerprintAuth from '../fingerPrintScanner';

export default function SignInButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => FingerprintAuth(navigation)}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign in</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 270,
    height: 38,
    backgroundColor: '#DF8F8F',

    justifyContent: 'center',

    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
