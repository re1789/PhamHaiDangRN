import { View, Text } from 'react-native'
import React from 'react'
import Appbar from '../Compoments/Appbar'
import Content from '../Compoments/Content'
import Avatars from '../Compoments/Avatars'

export default function NewFeed() {
  return (
    <View>
      <Appbar/>
      <Avatars/>
      <Content/>
    </View>
  )
}