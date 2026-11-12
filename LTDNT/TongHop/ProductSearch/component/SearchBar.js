import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function SearchBar({icon, placeholder, onPress, value, onChangeText}) {
  return (
    <View style = {styles.container}>
      <View style = {styles.container_}>
        <Ionicons
            name = {icon}
            size = {24}
            color = 'black'
        />
        <TextInput 
            style = {styles.txtInp} 
            placeholder = {placeholder}
            value = {value}
            onChangeText = {onChangeText}
            />
        <TouchableOpacity activeOpacity = {0.7} onPress = {onPress}>
            <Text style = {styles.txtX}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0733ac',
        padding: 10
    },
    container_: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        gap: 8
    },
    txtInp: {
        outlineStyle: 'none',
        fontSize: 18,
        flex: 1
    },
    txtX: {
        fontSize: 24,
        
    }
})