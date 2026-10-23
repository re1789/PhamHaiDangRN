import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Appbar from '../../component/Appbar'
import { useRouter } from 'expo-router'

export default function Home() {
  const router = useRouter();
  return (
    <View>
      <Appbar
        leftIcon = "location-outline"
        title = "Chichi lapu"
        rightIcon = "cart-outline"
      />
      <TouchableOpacity onPress={() => router.push("/user")} activeOpacity={0.7}>
        <Text>Yêu thích</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  
})