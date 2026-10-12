import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import ProductCard from './ProductCard'

export default function ProductList({products, categories, onPress}) {
    const getCategoryName = (categoryId) => {
        const finded = categories.find((nhom) => {return categoryId === nhom.id})
        return finded.name
    }
  return (
    <FlatList
        data={products}
        renderItem={({item}) => {
            return <ProductCard
                item = {item}
                categoryName = {getCategoryName(item.categoryId)}
                onPress = {onPress}
            />
        }}
        style={{flex: 1}}
    />
  )
}