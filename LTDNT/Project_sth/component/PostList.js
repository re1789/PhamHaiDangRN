import { View, Text } from 'react-native'
import React from 'react'
import PostItem from './PostItem'
import { FlatList } from 'react-native'

export default function PostList({ posts }) {
  return (
    <FlatList
        data={ posts }
        keyExtractor={(item) => (item.id)}
        renderItem={({ item }) => {
            return <PostItem
                post = { item }
            />
        }}
        horizontal
    />
  )
}