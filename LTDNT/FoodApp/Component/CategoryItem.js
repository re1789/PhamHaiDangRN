import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

export default function CategoryItem({category, isSelected, onPress}) {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.circle}>
            <Image style={styles.img} source={{uri: category.icon}}/>
        </View>
        <Text style={styles.text}>{category.name}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginRight: 16,
        alignItems: 'center',
        borderRadius: 50
    },
    circle:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 50,
        backgroundColor: '#EEEEEE',
        width: 70,
        height: 70
    },
    img:{
        width: 50,
        height: 50,
        borderRadius: 25,
        alignContent: 'center'
    },
    text:{
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0)'
    }
})