import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

export default function Detail({item}) {
  return (
    <View>
      <Text>Detail <Image style = {styles.image} source={{uri: item.photo}}/></Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image:{
        width: '100%',
        height: 200,
        borderRadius: 15,
        resizeMode: 'cover',
  },
})