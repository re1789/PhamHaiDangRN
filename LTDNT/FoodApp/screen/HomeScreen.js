import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Appbar from '../Component/Appbar'
import CategoryItem from '../Component/CategoryItem'
// import ListFood from '../Component/CategoryItem(T)'

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar
        leftIcon="location-outline"
        title="745 Lincoln Pl"
        rightIcon="cart-outline"
      />
      <CategoryItem
        
      />
      {/* <ListFood
        ListTitle1="Main"
        ListTitle2="Category"
      /> */}
    </SafeAreaView>
  )
}