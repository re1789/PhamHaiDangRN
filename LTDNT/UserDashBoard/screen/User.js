import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Appbar from '../component/Appbar'
import Ionicons from '@react-native-vector-icons/ionicons'
import { StyleSheet } from 'react-native'
import CountUser from '../component/CountUser'
import FilterBar from '../component/FilterBar'
import UserList from '../component/userList'
import { ActivityIndicator } from 'react-native'

export default function User() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState ( false )
  const [error, setError] = useState (null)
  const [roleFilter, setRoleFilter] = useState('all')

  useEffect (() => {
    const controller = new AbortController ()
    const getData = async () => { 
      try {
        const response = await fetch ('https://api.escuelajs.co/api/v1/users')

        if (!response.ok) {
          throw new Error (`Lỗi {response.status}`)
        }
        const data = await response.json()
        setUser (data)
      }
      catch (error) {
        setError (error.message)
        if ( error) {
          return <Text> Lỗi {error} </Text>
        }
      }
    }
    getData ()
    return () => { controller.abort () }
  }, [])
  if (loading == true) {
    return <ActivityIndicator size = 'large' />
  }

  return (
    <View style = {styles.container}>
      <Appbar
        leftIcon = 'menu'
        title = 'ADMIN DASHBOARD'
        rightIcon = 'https://i.imgur.com/yhW6Yw1.jpg'
      />
      <View style = {styles.userList}>
        <Text style = {styles.txt1}>User List</Text>
        <TouchableOpacity style = {styles.addUserBtn}>
        <Text style = {{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>+</Text>
          <Ionicons
            name='people-outline'
            size={24}
            color = 'white'
          />
          <Text style = {styles.txt2}>Add User</Text>
        </TouchableOpacity>
      </View>
      <CountUser
        user={100}
        admin={256}
        customer={512}
      />
      <FilterBar
        onPressAll={() => setRoleFilter('all')}
        onPressAdmin={() => setRoleFilter('admin')}
        onPressCustomer={() => setRoleFilter('customer')}
      />
      <UserList
        items = {items}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  userList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  addUserBtn: {
    flexDirection: 'row',
    width: 160,
    backgroundColor: '#3a69ec',
    borderRadius: 8,
    alignItems: 'center',
    padding: 5,
    gap: 15
  },
  txt1: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16
  },
  txt2: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16
  }
})