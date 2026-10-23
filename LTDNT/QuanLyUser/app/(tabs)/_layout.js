import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function _layout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#999999',
        tabBarInactiveTintColor: '#999999'
    }}>
        <Tabs.Screen name = "index" options={{
          tabBarIcon: ({color}) => {
            return <Ionicons
              name='people'
              size={30}
              color={color}
            />
          }
        }}/>
        <Tabs.Screen name = "user" options={{
          tabBarIcon: ({color}) => {
            return <Ionicons
              name='people'
              size={30}
              color={color}
            />
          }
        }}/>
        <Tabs.Screen name = "setting" options={{
          tabBarIcon: ({color}) => {
            return <Ionicons
              name='settings'
              size={30}
              color={color}
            />
          }
        }}/>
    </Tabs>
  )
}