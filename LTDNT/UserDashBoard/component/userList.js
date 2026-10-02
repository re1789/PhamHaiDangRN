import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import UserItem from './userItem'

export default function UserList({ items }) {
  return (
    <FlatList
      data={items}
      keyExtractor={( item ) => String(item.id)}
      renderItem={({item}) => { 
        return <UserItem
          item={item}
        />
      }}
    />
  )
}