import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ProductItem({product, onPress}) {
  return (
    <TouchableOpacity style = {styles.container} activeOpacity={0.7} onPress={onPress}>
        <Image style = {styles.img} source={{uri: product.images[0]}}/>
        <View style = {styles.txtA}>
            <Text style = {styles.txt1}>{product.title}</Text>
            <Text style = {styles.txt2}>${product.price}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles =StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        padding: 5
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    txtA: {
        flexDirection: 'column',
        padding: 5
    },
    txt1: {
        fontWeight: 'bold',
        fontSize: 18
    },
    txt2: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#47c421',
    }
})