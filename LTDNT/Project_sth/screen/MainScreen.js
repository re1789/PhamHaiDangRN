import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import PostList from '../component/PostList'
import { ActivityIndicator } from 'react-native'
import CommentList from '../component/CommentList'

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments

export default function MainScreen() {
      const [posts, setPosts] = useState ([])
      const [conmments, setComments] = useState ([])

      const [loading, setLoading] = useState ( false )
      const [error, setError] = useState (null)
      const controller = new AbortController ()
  
      useEffect (() => {
          const getPosts = async () => { 
  
              try {
                const responsePost = await fetch ('https://jsonplaceholder.typicode.com/posts')
                const responseComment = await fetch ('https://jsonplaceholder.typicode.com/comments')
  
                if ( !responsePost.ok && !responseComment.ok ) {
                  throw new Error (`Lỗi ${responsePost.status}`)
                  throw new Error (`Lỗi ${responseComment.status}`)
                }
  
                const dataP = await responsePost.json()
                setPosts(dataP)

                const dataC = await responseComment.json()
                setComments(dataC)
              }
  
              catch ( error ) {
                setError(error.message)
                if (error) {
                  return <Text>Lỗi {error}</Text>
                }
  
              }
           }
           getPosts()
           return () => { controller.abort() }
  
      }, [])
  
      if ( loading == true ) {
        return <ActivityIndicator size = 'large'/>
      }
  
  return (
    <View>
      <PostList
        posts = { posts }
      />
      <CommentList
        comments = { conmments }
      />
    </View>
  )
}