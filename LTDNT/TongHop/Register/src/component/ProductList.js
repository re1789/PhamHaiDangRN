import { Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import ProductCard from './ProductCard'

export default function ProductList({products, onPress}) {
  return (
    <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => {
            return <ProductCard
                item = {item}
                categoryName = {item.category?.name ?? ''}
                product = {item}
                onPress = {onPress}
            />
        }}
        style={{flex: 1}}
    />
  )
}