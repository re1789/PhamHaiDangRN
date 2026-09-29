import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CommentItem from './CommentItem'

export default function CommentList({ comments }) {
  return (
    <FlatList
        data={comments}
        keyExtractor={( item ) => ( item.id )}
        renderItem={({ item }) => {
            return <CommentItem
                comment={ item }
            />
        }}
    />
  )
}