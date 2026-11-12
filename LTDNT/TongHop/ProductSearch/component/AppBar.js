import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function AppBar({left, title, right}) {
  return (
    <View style = {styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <Ionicons
            name = {left}
            size = {32}
            color = 'black'
        />
      </TouchableOpacity>

      <Text style = {styles.txt}>{title}</Text>

      <TouchableOpacity>
        <Ionicons
            name = {right}
            size = {32}
            color = 'black'
        />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    txt: {
        fontSize: 32,
        fontWeight: 'bold'
    }
})