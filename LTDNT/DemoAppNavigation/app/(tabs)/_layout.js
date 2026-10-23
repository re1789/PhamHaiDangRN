import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function _layout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ec7322'
        }}>
        <Tabs.Screen name='index' options={{
            tabBarIcon: ({color}) => {
                return <Ionicons
                    name = 'restaurant'
                    size={24}
                    color={color}
                />
            }
        }}/>
        <Tabs.Screen name='search'  options={{
            tabBarIcon: ({color}) => {
                return <Ionicons
                    name = 'search'
                    size={24}
                    color={color}
                />
            }
        }}/>
        <Tabs.Screen name='like' options={{
            tabBarIcon: ({color}) => {
                return <Ionicons
                    name = 'heart'
                    size={24}
                    color={color}
                />
            }
        }}/>
        <Tabs.Screen name='user' options={{
            tabBarIcon: ({color}) => {
                return <Ionicons
                    name = 'person'
                    size={24}
                    color={color}
                />
            }
        }}/>
    </Tabs>
  )
}