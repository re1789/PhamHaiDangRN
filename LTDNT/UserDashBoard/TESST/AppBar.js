import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'
import { Image } from 'react-native'

export default function AppBar({leftIcon,title, rightIcon}) {
  return (
    <View style={styles.container}>
      <Ionicons name={leftIcon} size={30} color= 'white' style={styles.menu} />
      <Text style={styles.text}>{title}</Text>
      <Ionicons name={rightIcon} size={30} color= 'white' />
      <Image style={styles.image} source={{ uri: rightIcon }} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    jutifyContent: 'space-between',
    width: 40,
    backgroundColor: 'green',
  },
  menu:{
    paddingleft: 10,
  },
  text:{
    fontSize: 20,
    fontWeight: 600,
    color: 'white',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    paddingRight: 10,
  }
})