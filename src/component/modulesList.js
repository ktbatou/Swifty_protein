import React from "react";
import {Text, View, SafeAreaView, StyleSheet ,FlatList} from "react-native"

export default function ModulesList(arr){
    console.log(arr.ModulesArr)
    return (
        <View style={styles.ItemContainer}>
        <FlatList
        data={arr}
        renderItem={({item})=> (
            <Text style={styles.ItemText} >{item}</Text>
        )}
        />
        </View>
    );

}

const styles = StyleSheet.create({

    ItemText:{
        color: 'black',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        backgroundColor : '#E5E5E5',
        padding: 20,
        marginTop: 24,
        borderRadius: 8,
       // textAlign:'center',    
       
    },
    ItemContainer:{
        backgroundColor : 'white',
        paddingHorizontal: 20,
    }
})

