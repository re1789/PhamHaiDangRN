import { ActivityIndicator, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeScreen from '../../src/screen/HomeScreen'

export default function index() {
  const [categories, setCategories] = useState("")
  const [products, setProducts] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
        try {
            const categoriesResponse = await fetch('https://api.escuelajs.co/api/v1/categories')
            const productsResponse = await fetch('https://api.escuelajs.co/api/v1/products')

            if (!categoriesResponse.ok || !productsResponse.ok) {
            throw new Error('Lỗi')
            }

            const categoriesData = await categoriesResponse.json()
            const productsData = await productsResponse.json()
            setCategories(categoriesData)
            setProducts(productsData)
        } catch (error) 
        {
            setError(error.message)
        } finally 
        {
            setLoading(false)
        }
    }
    getData()
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" />
  }

  if (error) {
    return <Text>Lỗi: {error}</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <HomeScreen 
        categories={categories} 
        products={products} 
      />
    </View>
  )
}