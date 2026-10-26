import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'
import { useRouter } from 'expo-router'

export default function UserList() {
  const router = useRouter();
  return (
    <View style = {styles.container}>
      <Text style = {styles.txt}>UserList</Text>
      <TouchableOpacity style = {styles.btn} onPress={ () => router.push(`UserForm`)}>
        <Ionicons
            name = 'people'
            size = {24}
            color = '#ffffff'
        />
        <Text style = {styles.txt2}>Add User</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txt: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    txt2: {
        fontWeight: 'bold',
        paddingHorizontal: 5,
        color: '#ffffff'
    },
    btn: {
        backgroundColor: '#296be6',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        alignContent: 'center'
    }
})