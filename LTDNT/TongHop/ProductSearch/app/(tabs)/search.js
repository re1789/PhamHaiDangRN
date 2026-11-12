import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBar from '../../component/AppBar'
import SearchBar from '../../component/SearchBar'
import SearchResults from '../../component/SearchResults'
import { useRouter } from 'expo-router'

export default function search() {
  const [products, setproducts] = useState([])
  const [query, setQuery] = useState('')

  const router = useRouter()
  const filterProducts = products.filter((item) => item.title.toLowerCase().includes(query.trim().toLowerCase()))

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        
        if(!response.ok) {
          throw new Error(`Lỗi: ${response.status}`)
        }

        const data = await response.json()
        setproducts(data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  return (
    <View style = {styles.container}>
      <AppBar
        left = 'menu'
        title = 'PRODUCT SEARCH'
        right = 'person-circle-outline'
      />
      <SearchBar
        icon = 'search-outline'
        placeholder = 'Search by product name...'
        value = {query}
        onChangeText = {setQuery}
        onPress = {() => setQuery('')}
      />
      <SearchResults
        products = {filterProducts}
        
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})