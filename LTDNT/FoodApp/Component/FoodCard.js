import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

export default function FoodCard({ item, categoryName, onPress }) {
    return (
        <TouchableOpacity
            style = {styles.concon}
            onPress={()=>{onPress(item.id)}}>
            <View style = {styles.container}>
                <Image style = {styles.img} source={{uri: item.photo}}/>
                <Text style = {styles.duration}>{item.duration}</Text>
            </View>
            <View>

                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>{item.calories}</Text>
                <Text>${item.price}</Text>
                <Text>⭐{item.star}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    concon:{
        alignItems: 'center',
    },
  container:{
    borderRadius: 28,
    overflow: 'hidden',
    position: 'relative',
    width: 350,
    marginBottom: 16,
    marginTop: 20
  },
  img:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  duration:{
    position: 'absolute',
    left: 12,
    bottom: 12,
    backgroundColor: 'white',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
})