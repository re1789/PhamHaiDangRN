import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

export default function AppbarWithProps({leftIcon, title, rightIcon}) {
  return (
    <View style={styles.container}>
        <Ionicons name={leftIcon} size={24} color='black'/>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name={rightIcon} size={24} color='black'/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection:'row',
        height: 48,
        backgroundColor: 'lightblue',
    },
    title:{
        fontSize: 26,
        fontWeight:'bold',
        textAlign:'center',
        flex: 1
    }
})