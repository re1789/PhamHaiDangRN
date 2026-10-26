import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Appbar from '../../component/Appbar'
import UserList from '../../component/UserList'
import CountUser from '../../component/CountUser'
import UserItem from '../../component/UserItem'
import FilterBar from '../../component/FilterBar'

export default function user() {
  const roles = ["all", "admin", "customer"]
  const [users, setUsers] = useState()
  const [selectedRole, setSelectedRole] = useState('all')
  const filterUser = selectedRole === 'all' ? (users ?? []) : (users ?? []).filter(user => user.role === selectedRole)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users')

        if (!response) {
          throw new Error(`Lỗi: ${response.status}`)
        }

        const data = await response.json()
        setUsers(data)
      } 
      catch (err) {
        console.log(err)
      }
    }
    
    getData()
  }, [])

  return (
    <View style = {styles.container}>
      <Appbar
        left = "menu"
        title = "ADMIN DASHBOARD"
        right="https://i.ebayimg.com/images/g/DTQAAOSwDmFkE2b~/s-l1600.webp"
      />
      <UserList/>
      <CountUser
        users = {users?.length}
        admin = {users?.filter(user => user.role === 'admin').length}
        customer = {users?.filter(user => user.role === 'customer').length}
      />
      <FilterBar
        roles={roles}
        selectedRole={selectedRole}
        onPress={setSelectedRole}
      />
      <FlatList
        data = {filterUser}
        keyExtractor = {(user) => user.id}
        renderItem = {({item}) => {
          return <UserItem
            item = {item}
            onEditPress = {() => console.log('Edit pressed')}
            onDeletePress = {() => console.log('Delete pressed')}
          />
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})