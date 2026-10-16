import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useRouter } from 'expo-router'

export default function index() {
    const router = useRouter()
    const id = 10
  return (
    <View>
      <Text>Màn hình danh sách sản phẩm theo nhóm (Hiển thị sản phẩm)</Text>
      <Button
            onPress={() => {router.push(`products/${id}`)}}
            title='Xem chi tiết sản phẩm'
        />
    </View>
  )
}