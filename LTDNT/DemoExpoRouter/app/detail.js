import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useRouter } from 'expo-router'

export default function Detail() {
    const router = useRouter()
  return (
    <View>
      <Text>Màn hình chi tiết (Màn hình thứ 2)</Text>
      <Button
            onPress={() => {router.push("/products")}}
            title='Mở'
        />
    </View>
  )
}