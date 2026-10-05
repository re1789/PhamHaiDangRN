import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'
import { StyleSheet } from 'react-native'

export default function UserItem({ item, onEditPress, onDeletePress }) {
  const colors = 
    {admin: '#0052af',
    customer: '#00af4e'}
  
  const badgeColor = colors[item.role]
  return (
    <View style = {styles.container}>
        <Image style = {styles.avatar} source={{uri: item.avatar}}/>
        <View style = {styles.admin}>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
        {badgeColor? (
          <TouchableOpacity 
            style={[styles.badge, {backgroundColor: badgeColor}]}
            onPress={onEditPress(item.id)}
          >
            <Text style={styles.badText}>{item.role}</Text>
          </TouchableOpacity>) : (
    
          <TouchableOpacity
            onPress={onEditPress(item.id)}
            style={styles.button}
          >
            <Ionicons
              name='pencil'
              size={24}
              color='black'
            />
          </TouchableOpacity>
          )}
    
          <TouchableOpacity
            onPress={onDeletePress(item.id)}
            style={styles.button}
          >
            <Ionicons
            name='trash-outline'
            size={24}
            color='white'
          />
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    marginHorizontal: 10,
    marginVertical: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 12,
  },
  admin: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  button: {
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#fa3232',
    padding: 5,
    padding: 6,
    marginLeft: 4,
  },
  badge: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
    marginRight: 6,
  },
  badText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'capitalize'
  }
})