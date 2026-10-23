import { View, Text } from 'react-native'
import React from 'react'
import Appbar from '../../component/Appbar'
import UserList from '../../component/UserList'

export default function user() {
  return (
    <View>
      <Appbar
        left = "menu"
        title = "ADMIN DASHBOARD"
        right="https://i.ebayimg.com/images/g/DTQAAOSwDmFkE2b~/s-l1600.webp"
      />
      <UserList/>
    </View>
  )
}