import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CommentItem({ comment }) {
  return (
    <View style = { styles.container }>
      <Text><span style = { styles.span }>Name: </span>{ comment.name }</Text>
      <Text><span style = { styles.span }>Email: </span>{ comment.email }</Text>
      <Text><span style = { styles.span }>Comment: </span></Text>
      <Text>{ comment.body }</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#f7ed67',
    padding: 10,
  },
  span: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 14
  }
})