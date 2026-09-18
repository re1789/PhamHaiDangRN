import React, { useState } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Appbar from '../Component/Appbar'
import CategoryItem from '../Component/CategoryItem'
import CategoryList from '../Component/CategoryList'
import { categoryData, menuData } from '../Constant'
import FoodList from '../Component/FoodList'

export default function HomeScreen() {
  const[manhom, setManhom] = useState(null)
  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar
        leftIcon="location-outline"
        title="745 Lincoln Pl"
        rightIcon="cart-outline"
      />
      <CategoryList
        categories={categoryData}
        selectedCategoryID={manhom}
        onSelectedCategory={setManhom}
      />
      <FoodList
        data={menuData}
        categories={manhom}
        onPressItem={setManhom}
      />
    </SafeAreaView>
  )
}