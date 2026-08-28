import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AdidasImage() {
  return (
    <SafeAreaView style = {styles.container}>
          <Text style = {styles.Text}>
            <b>Adidas Image</b>
          </Text>
          <Image source={require('../../assets/ADIDAS.jpg')}/>
          <Image source={{uri:'https://images.unsplash.com/photo-1542291026-7eec264c27ff'}} style={{ width: 400, height: 400 }}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Text:{
    textAlign:"center",
    fontSize: 50
  }
})