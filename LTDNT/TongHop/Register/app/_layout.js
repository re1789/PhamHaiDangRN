import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { HeaderTitle } from 'expo-router/build/react-navigation'

export default function _layout() {
  return (
    <Stack 
    screenOptions= {{
      headerShown: false,
      headerTitleAlign: "center"
    }}
    >
      <Stack.Screen name='product'options={{headerTitle: 'Product list', headerShown: true}}/>
      <Stack.Screen name='product/detail' options={{headerTitle: 'Product Details', headerShown: true}}/>
    </Stack>
  )
}