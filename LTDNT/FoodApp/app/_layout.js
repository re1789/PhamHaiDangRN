import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack
        screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center'
        }}
    >
    <Stack.Screen name='index' options={{headerTitle: '745 Lincoln Pl'}} />
    <Stack.Screen name='products' options={{headerTitle: 'Burger Story'}} />
    <Stack.Screen name='/products/detail' options={{headerTitle: ''}}/>
    </Stack>
  )
}