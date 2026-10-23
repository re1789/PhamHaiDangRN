import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function Appbar({left, title, right}) {
  return (
    <View style = {styles.container}>
        <TouchableOpacity>
            <Ionicons
                name = {left}
                size = {24}
                color = "white"
            />
        </TouchableOpacity>
      <Text style = {styles.txt}>{title}</Text>
        <TouchableOpacity>
            <Image style = {styles.img} source={{uri: right}}/>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#296be6',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    txt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    img: {
        backgroundColor: '#ffffff',
        width: 50,
        height: 50,
        borderRadius: 999,
        margin: 10
    }
})