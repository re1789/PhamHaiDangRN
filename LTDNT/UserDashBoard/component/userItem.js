import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'
import { StyleSheet } from 'react-native'

export default function UserItem({ item, onPressAdmin, onPressCustomer }) {
  return (
    <View style = {styles.container}>
      <View style = {styles.admin}>

        <Image style = {styles.avatar} source={{uri: item.avatar}}/>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
          <TouchableOpacity onPress={onPressAdmin}>
            <Text>{item.role}</Text>
            <Ionicons
              name='trash-outline'
              size={24}
              color = 'white'
            />
          </TouchableOpacity>

        <View style = {styles.customer}>

          <Image style = {styles.avatar} source={{uri: item.avatar}}/>
          <Text>{item.email}</Text>
          <TouchableOpacity onPress={onPressCustomer}>
            <Text>{item.role}</Text>
            <Ionicons
              name='trash-outline'
              size={24}
              color = 'white'
            />
          </TouchableOpacity>

        </View>
      </View>
      <View style = {styles.customers}>
        <Image style = {styles.avatar} source={{uri: item.avatar}}/>
        <Text>{item.email}</Text>
          <TouchableOpacity>
            <Ionicons
              name='pencil'
              size = {24}
              color = 'black'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name='trash-outline'
              size={24}
              color = 'white'
            />
          </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  admin: {

  },
  customer: {

  },
  customers: {

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})