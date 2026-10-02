import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'
import { StyleSheet } from 'react-native'
import MaterialIcons from '@react-native-vector-icons/material-icons'

export default function Appbar() {
  return (
    <View style = {styles.container}>
      <TouchableOpacity>
        <View>
            <Ionicons
                name='reorder-three-outline'
                size={24}
                color = 'black'
            />
        </View>
      </TouchableOpacity>
      <Text>ADMIN DASHBOARD</Text>
      <MaterialIcons
        name = 'supervised-user-circle'
        size = {24}
        color = 'black'
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between'

    }
})