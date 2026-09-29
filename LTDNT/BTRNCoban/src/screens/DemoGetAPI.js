import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { ActivityIndicator } from 'react-native'

export default function DemoGetAPI() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState( true )
    const [error, setError] = useState (null)
    const controller = new AbortController()
    useEffect(() => { 
        const getUsers = async () => { 
            try {
                const response = await fetch ('https://jsonplaceholder.typicode.com/users/1')
                // https://jsonplaceholder.typicode.com/users
                // https://httpbin.org/delay/5
                if (!response.ok) {
                    throw new Error (`Lỗi với mã: ${response.status}`)
                }
                const data = await response.json()
                setUsers(data)
            }
            catch ( error ) {
                setError(error.message)
                if (error) {
                    return <Text>Lỗi {error}</Text>
                }
            }
         }
         getUsers()
         return () => {controller.abort()}
     }, [])
     if (loading == true) {
        return <ActivityIndicator size = 'large'/>
     }
  return (
    <FlatList
        data = { users }
        keyExtractor = {(item) => { return item.id}}
        renderItem = {({item}) => {
            return <View>
                <Text>Mã số: {item.id}</Text>
                <Text>Họ tên: {item.name}</Text>
            </View>
        }}
    />
  )
}