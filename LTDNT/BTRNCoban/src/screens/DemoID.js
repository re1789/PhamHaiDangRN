import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { StyleSheet, Platform } from 'react-native'

export default function DemoID() {
    const [user, setUser] = useState(null)
    const [pass, setPass] = useState(null)

    useEffect (() => {
        // 1. Khai báo hàm lấy dữ liệu
        const getUser = async (id) => {
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
                const data = await response.json()
                setUser(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getUser(1)
    },[])
    const payLoad = {
    "email": "sara612334@mail.com",
    "password": pass,
    "name": "Sara792311",
    "role": "customer",
    "avatar": "https://www.loremfaces.net/256/id/1.jpg",
  }
  const changePass = async () => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payLoad)
        })
        console.log(await response.json())
    }
    catch(err) {
        console.log(err)
    }
  }
    const handleUpdate = () => {
        console.log("Mật khẩu mới:", pass)
    }
  return (
    <View style={styles.container}>
        <View>
            <Text>ID: {user?.id}</Text>
            <Text>Name: {user?.name}</Text>
            <TextInput
                value = {pass} 
                onChangeText={setPass}
                secureTextEntry
                placeholder='Nhập mật khẩu mới'
            />
            <TouchableOpacity
                onPress={handleUpdate}
            >
                <Text>Cập nhật</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
});