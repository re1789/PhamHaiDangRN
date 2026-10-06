import { View, Text } from 'react-native'
import React from 'react'
import AppBarProduct from '../component/AppBarProduct'
import { StyleSheet } from 'react-native'
import FilterProduct from '../component/FilterProduct'

export default function ProductList() {
  return (
    <View style = {styles.container}>
      <AppBarProduct
        leftIcon = 'arrow-back-outline'
        title = 'Lọc sản phẩm'
      />
      <FilterProduct/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})