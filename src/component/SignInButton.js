import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Fingerprint from '../biometric';

export default function SignInButton()
{
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity onPress={ () => {
            console.log("clicked")
            Fingerprint()}
        //     () => navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'BiometricPopup' }],
        //   })
          }>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Sign in</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
buttonContainer:{
     width: 270,
     height: 38,
    backgroundColor: '#DF8F8F',
  
    justifyContent: 'center',
 
    borderRadius : 5,
},
buttonText:{
   
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    textAlign:'center',    
   
}
});