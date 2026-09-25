import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

export default function ProductItem({item, categoryName, onPress}) {
  return (
    <TouchableOpacity
        style = {styles.container}
        activeOpacity={0.7}
        onPress={() => onPress(item.id)}
    >
        <View style = {styles.card}>
            <Image style = {styles.img} source={{uri: item.images[0]}}/>
        </View>
        {/* Tiêu đề và giá cả */}
        <View style = {styles.txt}>
            <Text >{item.title}</Text>
            <Text >Price: ${item.price}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#e4e3e3',
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  card: {
    width: '50%',
    height: 220,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  txt: {
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'center',
    flexGrow: 16,
    gap: 8
  },
  txt1: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f1f1f',
  },
  txt2: {
    marginTop: 8,
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
})