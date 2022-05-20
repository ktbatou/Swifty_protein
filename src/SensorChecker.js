import { Component } from "react";
import FingerprintScanner from "react-native-fingerprint-scanner";

export default function SensorChecker(){
    FingerprintScanner.isSensorAvailable()
    .then(biometryType => console.log(biometryType))
    .catch(error => console.log(error.message))   
}
