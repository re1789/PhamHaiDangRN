import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'
import { StyleSheet } from 'react-native'

export default function CategoryList({categories, selectedCategoryID, onSelectedCategory}) {
    const _renderItem = ({item}) => { 
        return <CategoryItem
            category={item}
            isSelected={item.id == selectedCategoryID}
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
        renderItem={_renderItem}
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