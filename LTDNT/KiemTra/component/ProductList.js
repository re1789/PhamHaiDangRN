import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import ProductItem from './ProductItem'

export default function ProductList({products, categories, onPress}) {
    const CategoryName = (categoryId) => {
        const finded = categories?.find((gr) => Number(gr.id) === Number(categoryId))
        return finded ? finded.name : 'Unknown category'
    }

    return (
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            categoryName={CategoryName(item.category?.id)}
            onPress={onPress}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        style={{ flex: 1 }}
      />
    )
}