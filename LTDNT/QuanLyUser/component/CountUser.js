import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CountUser({ users, admin, customer}) {
  return (
    <View style = {styles.container}>
      <View style = {styles.subContainer}>
        <Text style = {styles.txt1}>Users</Text>
        <Text style = {styles.txt2}>{users}</Text>
      </View>
      <View style = {styles.subContainer}>
        <Text style = {styles.txt1}>Admin</Text>
        <Text style = {styles.txt2}>{admin}</Text>
      </View>
      <View style = {styles.subContainer}>
        <Text style = {styles.txt1}>Customer</Text>
        <Text style = {styles.txt2}>{customer}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    subContainer: {
        width: 150,
        alignItems: 'center',
        backgroundColor: '#5f8dee',
        flex: 1,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#929292',
    },
    txt1: {
        fontSize: 20,
    },
    txt2: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})