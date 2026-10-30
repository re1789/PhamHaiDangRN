import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#063ed6',
      tabBarInactiveTintColor: '#999999'
    }}>
      <Tabs.Screen name='index' options={{
        tabBarIcon: ({color}) => {
          return <Ionicons
            name = 'home-outline'
            size = {32}
            color = {color}
          />
        }
      }}/>
      <Tabs.Screen name='search' options={{
        tabBarIcon: ({color}) => {
          return <Ionicons
            name = 'search-outline'
            size = {32}
            color = {color}
          />
        }
      }}/>
      <Tabs.Screen name='cart' options={{
        tabBarIcon: ({color}) => {
          return <Ionicons
            name = 'cart-outline'
            size = {32}
            color = {color}
          />
        }
      }}/>
      <Tabs.Screen name='user' options={{
        tabBarIcon: ({color}) => {
          return <Ionicons
            name = 'person-outline'
            size = {32}
            color = {color}
          />
        }
      }}/>
    </Tabs>
  )
}