import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { HeaderTitle } from 'expo-router/build/react-navigation'

export default function _layout() {
  return (
    <Stack 
    screenOptions= {{
      headerShown: true,
      headerTitleAlign: "center"
    }}

    />
  )
}