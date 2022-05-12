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
        console.log("start loading");
        dispatch(search(e))
        console.log("done")
        // if (e) {
        //     // display loader
        //     console.log("loading");
        //     dispatch(search(e).then(res => {
        //         console.log("stop loading");
        //         console.info("res : ", res.length)
        //         //stop loader
        //     }).catch(err => {
        //         console.log("stop loading");
        //         //stop loader
        //         console.log(err)

        //     }))
        // } else {
        //     console.log("value empty")
        // }
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