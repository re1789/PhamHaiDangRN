import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

export default function CategoryItem({category, isSelected, onPress}) {
  return (
    <TouchableOpacity
        onPress={() => {onPress(category.id)}}
        activeOpacity={0.7}
        style = {styles.container}
    >
      <View style = {[styles.circle, isSelected && styles.selectedCircle]}>
        <Image style = {styles.img} source={{uri: category.image}}/>
      </View>
       <Text style = {[styles.txt, isSelected && styles.selectedTxt]}>{category.name}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: 'center',
    marginHorizontal: 5
  },
  circle: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 999
  },
  selectedCircle: {
    backgroundColor: 'orange'
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 999,
    backgroundColor: '#c2c2c2'
  },
  txt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 5
  },
  selectedTxt: {
    color: 'orange'
  }
})