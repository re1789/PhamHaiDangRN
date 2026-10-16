import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function productDetail() {
  const {id, name} = useLocalSearchParams();
  return (
    <View>
      <Text>Màn hình chi tiết về một sản phẩm (Hiển thị chi tiết sản phẩm)</Text>
      <Text>Tham số nhận được là: {id} -  {name}</Text>
    </View>
  )
}