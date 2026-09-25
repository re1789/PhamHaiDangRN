import React, { useMemo, useState } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Appbar from '../Component/Appbar'
import CategoryItem from '../Component/CategoryItem'
import CategoryList from '../Component/CategoryList'
import { categoryData, menuData } from '../Constant'
import FoodList from '../Component/FoodList'
import ProductList from '../Component/ProductList'

export default function HomeScreen() {
  const [manhom, setManhom] = useState(null)
  const [maSP, setMaSP] = useState(null)
  const menu = useMemo(() => {
    return menuData.filter((value) => {return value.categoryId === manhom})}, [manhom])
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
      <ProductList
        products={menu}
        categories={categoryData}
        onPress={setMaSP}
      />
    </SafeAreaView>
  )
}