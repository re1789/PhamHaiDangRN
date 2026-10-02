import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

export default function Appbar({leftIcon, title, rightIcon}) {
  return (
    <View style = {styles.container}>

      <TouchableOpacity>
        <View style = {styles.leftIcon}>
          <Ionicons name = {leftIcon} size={24} color = 'black'/>
        </View>
      </TouchableOpacity>

      <Text style = {styles.txt}>{title}</Text>

      <Image style = {styles.img} source={{uri: rightIcon}}/>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      backgroundColor: '#e96e6e',
      borderTopStartRadius: 15,
      borderTopEndRadius: 15,
      padding: 5

    },
    leftIcon: {
      margin: '50%',
    },
    txt: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#ffffff',
      alignContent: 'center'
    },
    img: {
      width: 50,
      height: 50,
      borderRadius: 999
    }

})