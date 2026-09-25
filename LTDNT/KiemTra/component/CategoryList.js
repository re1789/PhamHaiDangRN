import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'
import { StyleSheet } from 'react-native'

export default function CategoryList({categories, selecteCategoryID, onSelectedCategory}) {
    const render =({item}) => {
        return <CategoryItem
          category={item}
          isSelected={item.id == selecteCategoryID}
          onPress={onSelectedCategory}
        />
    }
  return (
    <FlatList
        style = {styles.flat}
        data={categories}
        keyExtractor={(item, index) => {
          return item.id
        }}
        renderItem={render}
        horizontal
    />
  )
}
const styles = StyleSheet.create({
    flat:{
        paddingTop: 0,
        flexGrow: 0
    }
})