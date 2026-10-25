import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Appbar from '../../component/Appbar'
import UserList from '../../component/UserList'
import CountUser from '../../component/CountUser'
import UserItem from '../../component/UserItem'

export default function user() {
  const roles = ["Users", "Admin", "Customer"]
  const [users, setUsers] = useState()
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
        admin = {users?.filter(user => user.role.name === 'admin').length}
        customer = {users?.filter(user => user.role.name === 'customer').length}
      />
      <FlatList
        data = {users}
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