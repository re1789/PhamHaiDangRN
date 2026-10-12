import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

export default function CategoryItem({category, isSelected, onPress}) {
  return (
    <TouchableOpacity
     onPress={()=>{onPress(category.id)}}
     style={[styles.container, isSelected && styles.selectedContainet]}>
        <View style={[styles.circle, isSelected && styles.selectedCircle]}>
            <Image style={styles.img} source={{uri: category.icon}}/>
        </View>
        <Text style={[styles.text, isSelected && styles.selectedText]}>{category.name}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        height: 140,
        width: 80,
        marginRight: 16,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
    },
    selectedContainet: {
        backgroundColor: 'orange'
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
    selectedCircle: {
        color: 'orange'
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
        color: 'rgb(0, 0, 0)'
    },

    selectedText: {
        color: 'white'
    }
})