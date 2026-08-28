import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BanHang from '../Free_to_create/BanHang'

export default function BTFlexbox() {
  return (
        <SafeAreaView style = {styles.container}>

            <View style = {styles.view1}></View>
            
            <View style = {styles.view2}></View>
            
            <View style = {styles.view3}></View>
        
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    view1:{
        backgroundColor:'powderblue',
        width: 50, height:100,
    },
    view2:{
        backgroundColor:'skyblue',
        width: 50, height:100
    },
    view3:{
        backgroundColor:'steelblue',
        width: 50, height:100
    }
})