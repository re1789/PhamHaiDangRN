import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryList from '../component/CategoryList'
import ProductList from '../component/ProductList'
import { useRouter } from 'expo-router'

export default function HomeScreen({ categories, products}) {
  const router = useRouter();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [selectedProductId, setSelectedProductId] = useState(null)
  const visibleProducts = selectedCategoryId === null ? products : products.filter((product) => product.category?.id === selectedCategoryId)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CategoryList
        categories={categories}
        selectedCategoryID={selectedCategoryId}
        onSelectedCategory={setSelectedCategoryId}
      />
      <ProductList
        products={visibleProducts}
        onPress={(product) => {
          router.push({
            pathname: '/product/detail',
            params: { id: String(product.id) },
          })
        }}
      />
    </SafeAreaView>
  )
}