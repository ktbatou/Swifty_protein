import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'

export default function SearchInput(){
    return (
        <View>
    <TextInput style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});