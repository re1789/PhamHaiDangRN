import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function BTFlexbox2() {
  return (
    <SafeAreaView style = {styles.container}>
        {/* Header */}
        <View style = {styles.viewHeader}>
            <Text style = {styles.Text}>Header</Text>
        </View>


        {/* Content */}
        <View style = {styles.viewContent}>
            {/* Cột trái */}
            <View style = {styles.leftContent}>
                <Text>Content</Text>
            </View>

            
            {/* Cột phải */}
            <View style = {styles.rightContent}>

                <View style = {styles.s1}></View>

                <View style = {styles.s2}></View>

                <View style = {styles.s3}></View>

                <View style = {styles.s4}></View>

            </View>

        </View>


        {/* Footer */}
        <View style = {styles.viewFooter}>
            <Text style = {styles.Text}>Footer</Text>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    viewHeader:{
        backgroundColor:'blue',
        height:60,
        justifyContent:"center",
        alignItems:"center",
    },
    viewContent:{

        flexDirection:"row",
        flex: 1,
    },
    viewFooter:{
        backgroundColor:'green',
        height:60,
        justifyContent:"center",
        alignItems:"center"
    },
    Text:{
        fontSize: 20,
        color: "white"
    },
    leftContent:{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "lightgray"
    },
    rightContent:{
        flex: 2,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor: "pink"
    },
    s1:{
        width: 100,
        height: 100,
        backgroundColor: "red"
    },
    s2:{
        width: 100,
        height: 100,
        backgroundColor: "purple"
    },
    s3:{
        width: 100,
        height: 100,
        backgroundColor: "lightblue"
    },
    s4:{
        width: 100,
        height: 100,
        backgroundColor: "yellow"
    }
})