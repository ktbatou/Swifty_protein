import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import ModulesList from "../component/modulesList";
import ModulesArr from  '../res'


export default function Modules(){
    return (
<View>
    <ModulesList ModulesArr/>
</View>
    );
}