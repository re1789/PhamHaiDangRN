import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function CountUser({user, admin, customer}) {
  return (
    <View style = {styles.container}>
      <View style = {styles.item}>
        <Text style = {styles.txt1}>User</Text>
        <Text style = {styles.txt2}>{user}</Text>
      </View>
      <View style = {styles.item2}>
        <Text style = {styles.txt1}>Admin</Text>
        <Text style = {styles.txt2}>{admin}</Text>
      </View>
      <View style = {styles.item}>
        <Text style = {styles.txt1}>Customer</Text>
        <Text style = {styles.txt2}>{customer}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        flexDirection: 'row'
    },
    item: {
        width: 150,
        alignItems: 'center',
        backgroundColor: '#cecece',
        flex: 1,
    },
    txt1: {
        fontSize: 20
    },
    txt2: {
        fontWeight: 'bold',
        fontSize: 24
    },
    item2: {
        width: 150,
        alignItems: 'center',
        backgroundColor: '#cecece',
        flex: 1,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#929292',
    },
})