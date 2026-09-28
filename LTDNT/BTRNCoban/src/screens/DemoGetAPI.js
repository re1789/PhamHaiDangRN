import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

export default function DemoGetAPI() {
    const [users, setUsers] = useState([])
    useEffect(() => { 
        const getUsers = async () => { 
            try {
                const response = await fetch ('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) {
                    throw new Error (`Lỗi với mã: ${response.status}`)
                }
                const data = await response.json()
                setUsers(data)
            }
            catch ( error ) {
                console.log(`Lỗi: ${error}`)
            }
         }
     }, [])
  return (
    <FlatList
        data = {users}
        keyExtractor = {(item) => { return item.id}}
        renderItem = {(item) => {
            return <View>
                <Text>Mã số: {item.id}</Text>
                <Text>Họ tên: {item.name}</Text>
            </View>
        }}
    />
  )
}