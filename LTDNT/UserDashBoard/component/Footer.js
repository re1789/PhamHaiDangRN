import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer({companyName}) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Power by </Text>
      <Text
        onPress={() => {
            Linking.openURL('https://api.escuelajs.co/api/v1/users')
        }}
        style = {styles.text2}
      >{companyName}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 10,
        backgroundColor: '#f2f2f2'
    },
    text: {
        color: '#000000',
        fontSize: 16,
    },
    text2: {
        color: '#0786fd',
        fontSize: 16,
        textDecorationLine: 'underline'
    }
})