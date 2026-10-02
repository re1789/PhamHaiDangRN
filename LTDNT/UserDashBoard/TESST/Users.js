import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'
import AppBar from './AppBar'

export default function Users() {
  return (
  <View style={styles.container}>
    <AppBar
        leftIcon = 'menu'
        title = 'ADMIN DASHBOARD'
        rightIcon = 'https://i.imgur.com/LDOO4Qs.jpg'
    />
    <View style={styles.viewAddUser}>
        <Text style={styles.textUserList}>Users</Text>
        <TouchableOpacity style={styles.touch}>
            <Ionicons name = 'people' size={30} color = 'white' />
        </TouchableOpacity>
        <Text style={styles.textAdduser}>Add User </Text>
    </View>
  </View>
  
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    viewAddUser:{
        flexDirection: 'row'

    },
    textUserList:{
        fontSize:24,
        marginLeft:10,
    },
    touch:{
        padding:10,
        backgroundColor: 'steelblue',
        borderRadius:10,
        flexDirection: 'row',
    },
    textAdduser:{
        color: 'white',
        fontSize: 24,
    },
})