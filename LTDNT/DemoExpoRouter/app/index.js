import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function MainScreen() {
    const router = useRouter()
  return (
    <View style = {styles.container}>
      <Text>Màn hình chính của ứng dụng (Màn hình Login)</Text>
      <View style= {styles.btn}>
        <Button
            onPress={() => {router.push("/products")}}
            title='Mở chi tiết'
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center'
    },
    btn: {
        padding: 25,
        width: 250,
        gap: 8
    }
})