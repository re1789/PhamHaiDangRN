import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FoodCard from './FoodCard'
import { FlatList } from 'react-native'
import { categoryData, menuData } from '../Constant'

export default function FoodList({ data, categories, onPressItem }) {
  const _renderItem = ({item}) => { 
      return <FoodCard
        item={item}
        categoryName={item.menuId == categories}
        onPress={onPressItem}
      />
   }
   return (
      <FlatList
        data={menuData}
        keyExtractor={(item, index) => {
          return item.menuId
        }}
        renderItem={_renderItem}
        style={{flex: 1}}
      />
   )
}