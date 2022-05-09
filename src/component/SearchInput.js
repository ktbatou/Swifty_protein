import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Dimensions } from "react-native";
import ModulesArr from '../res';

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function SearchInput() {
    async function search(val) {
        return new Promise((resolve, reject) => {

            const filter = ModulesArr.filter(lg => {
                return lg.includes(val)
            })
            if (filter.length)
                resolve(filter)
            else
                reject("this val not exist")

        })
    }
    async function changeHandle(e) {
        console.log("start loading");
        if (e) {
            // display loader
            console.log("loading");
            search(e).then(res => {
                console.log("stop loading");
                console.info("res : ", res.length)
                //stop loader
            }).catch(err => {
                console.log("stop loading");
                //stop loader
                console.log(err)

            })
        } else {
            console.log("value empty")
        }
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