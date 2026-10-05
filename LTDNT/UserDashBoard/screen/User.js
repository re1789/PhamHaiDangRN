import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Appbar from '../component/Appbar'
import Ionicons from '@react-native-vector-icons/ionicons'
import { StyleSheet } from 'react-native'
import CountUser from '../component/CountUser'
import FilterBar from '../component/FilterBar'
import { FlatList } from 'react-native'
import UserItem from '../component/UserItem'
import Footer from '../component/Footer'

export default function User() {
  const roles = ['all', 'admin', 'customer']
  const [selectedRole, setSelectedRole] = useState('all')

  const [users, setUsers] = useState([])

  useEffect (() => {
    const controller = new AbortController ()
    const getData = async () => { 
      try {
        const response = await fetch ('https://api.escuelajs.co/api/v1/users')

        if (!response.ok) {
          throw new Error (`Lỗi ${response.status}`)
        }
        const data = await response.json()
        setUsers (data)
      }
      catch (error) {
        console.error (error)
      }
    }
    getData ()
  }, [])
  const onEdit = () => {
    console.log(`Đã edit user`)
  }
  const onDelete = () => {
    console.log(`Đã xóa user`)
  }
  const filteredUsers = selectedRole === 'all' ? users : users.filter(user => user.role === selectedRole)

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
        user={users.length}
        admin={users.filter(user => user.role === 'admin').length}
        customer={users.filter(user => user.role === 'customer').length}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(user) => user.id}
        renderItem={({item}) => {
          return <UserItem
            item={item}
            onEditPress={onEdit}
            onDeletePress={onDelete}
          />
        }}
        ListHeaderComponent = {() => (
          <FilterBar
            roles={roles}
            selectedRole={selectedRole}
            onPress={setSelectedRole}
          />
        )}
      />
      <Footer
        companyName="Platzi Fake Store API"
        link="https://api.escuelajs.co/api/v1/users"
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