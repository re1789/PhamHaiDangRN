import { View, Text } from 'react-native'
import React from 'react'
import CategoryList from '../../src/component/CategoryList'

export default function index() {
    // https://api.escuelajs.co/api/v1/users
  return (
    <View>
      <CategoryList/>
    </View>
  )
}