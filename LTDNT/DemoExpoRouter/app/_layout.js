import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack
        screenOptions={{
            headerShown: true,
            headerTitle: 'App bán hàng',
            headerTitleAlign: 'center',
        }}
    >
    <Stack.Screen name='index' options={{headerTitle: 'App bán hàng'}} />
    <Stack.Screen name='products' options={{headerTitle: 'Danh sách sản phẩm'}} />
    <Stack.Screen name='products/[id]' options={{headerTitle: 'Chi tiết sản phẩm'}} />
    </Stack>
  )
}