import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function AppBarProduct({leftIcon, title}) {
  return (
    <View style = {styles.container}>
        <TouchableOpacity>
            <Ionicons
            name = {leftIcon}
            size = {24}
            color = 'black'
            />
        </TouchableOpacity>
      <Text style = {styles.title}>{title}</Text>
      <Text></Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#ececec',
        padding: 5,
        backgroundColor: '#ffffff',
        shadowColor: '#00000023',
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    }
})