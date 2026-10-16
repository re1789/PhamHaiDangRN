import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ProductId() {
    const {id} = useLocalSearchParams()
  return (
    <View>
        <Text>Hiển thị </Text>
        <Text>Sản phẩm đang xem có mã số: {id}</Text>
    </View>
  )
}