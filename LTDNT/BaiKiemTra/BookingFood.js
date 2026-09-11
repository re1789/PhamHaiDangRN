import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import FoodBar from './FoodBar'
import FoodFinder from './FoodFinder'
import FoodList from './FoodList'
import Contents from './Contents'
import { StyleSheet } from 'react-native'

export default function BookingFood() {
  return (
    <SafeAreaView style = {styles.container}>
        <FoodBar/>
        <FoodFinder/>
        <FoodList/>
        <Contents/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})