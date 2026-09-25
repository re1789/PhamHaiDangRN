import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryList from '../component/CategoryList'
import { categories, products } from '../ConstantAPI'
import ProductList from '../component/ProductList'

export default function HomeScreen() {
  const [categoryID, setCategoryID] = useState(null)
  const [productID, setProductID] = useState(null)
  const menu = useMemo(() => {
    return products.filter((value) => {return value.category?.id === categoryID})}, [categoryID])
  return (
    <SafeAreaView style = {{flex: 1}}>
        <CategoryList
            categories={categories}
            selecteCategoryID={categoryID}
            onSelectedCategory={setCategoryID}
        />
        <ProductList
          products={menu}
          categories={categories}
          onPress={setProductID}
        />
    </SafeAreaView>
  )
}