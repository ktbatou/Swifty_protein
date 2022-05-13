import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Dimensions } from "react-native";
import {  useDispatch } from 'react-redux';
import { search } from '../redux/createSlice';

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function SearchInput() {
    const dispatch = useDispatch()
    async function changeHandle(e) {
        if (!e){
            console.log("value empty")
        }dispatch(search(e))
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={changeHandle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        flex: 1,
        justifyContent: "center",
        borderWidth: 1,
        width: width * 0.9,
        padding: 10,
        borderRadius: 5,
        borderColor: 'white',
        backgroundColor: 'white',

    },
});