import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function FilterBar({onPressAll, onPressAdmin, onPressCustomer}) {
  return (
    <View style = {styles.container}>
      <Text>Filter by role:</Text>

      <TouchableOpacity onPress={onPressAll}>
        <Text>All</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressAdmin}>
        <Text>Admin</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressCustomer}>
        <Text>Customer</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {

    },

})