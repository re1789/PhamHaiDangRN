import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'
import { StyleSheet } from 'react-native'

export default function ProductCard({item, categoryName, onPress}) {
  return (
    <TouchableOpacity style = {styles.container} activeOpacity={0.7} onPress={() => {onPress(item.id)}}>
        <View style = {styles.card}>
          <Image style = {styles.image} source={{uri: item.images?.[0]}}/>
        </View>
        <Text style = {styles.name}>{item.title}</Text>

        {/* Phần đánh giá */}
        <View style = {styles.info}>
          <Text style={styles.infoText}>
            <Ionicons name='star' size={24} color='yellow'/>
            {item.rating?.rate ?? ''}
          </Text>
          <Text style={styles.infoText}>●</Text>
          <Text style={styles.infoText}>{categoryName}</Text>
          <Text style={styles.infoText}>●</Text>  
          <Text style={styles.infoText}>${item.price}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container:{
    padding: 10,
    maxWidth: '100%',
    height: 290,
    position: 'relative',
    borderRadius: 16,
    marginBottom: 10,
    overflow: 'hidden',
    backgroundColor: '#e2e1e1'
  },
  card:{
    position: 'relative'
  },
  image:{
    width: '100%',
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  duration:{
    fontSize: 5,
    position: 'absolute',
    bottom: 0,
    width: 100,
    height: 40,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name:{
    fontWeight: 'bold',
    fontSize: 24
  },
  info:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  infoText:{
    marginRight: 8,
    fontSize: 16
  }
})