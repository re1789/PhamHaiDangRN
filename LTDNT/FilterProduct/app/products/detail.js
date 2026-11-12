// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function detail({ product }) {
//   return (
//     <View>
//     <Image style={styles.img} source={{uri: product.images[0]}}/>
//     <Text>{product.title}</Text>
//     <Text>${product.price}</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {

//     }
// })




import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function ProductDetail() {
  const { id } = useLocalSearchParams()
  const productId = Array.isArray(id) ? id[0] : id

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
      let active = true
      const loadProduct = async () => {
          if (!productId) {
              setError('Không tìm thấy mã sản phẩm.')
              setLoading(false)
              return
          }

          setLoading(true)
          setError('')

          try {
              const response = await fetch(
                  `https://api.escuelajs.co/api/v1/products/${productId}`
              )

              if (!response.ok) {
                  throw new Error('Không tải được thông tin sản phẩm.')
              }

              const data = await response.json()
              if (active) setProduct(data)
          } catch (err) {
              if (active) {
                  setError(
                    err instanceof Error ? err.message : 'Đã xảy ra lỗi khi tải sản phẩm.'
                  )
              }
          } finally {
              if (active) {
                setLoading(false)
              }
          }
      }

      loadProduct()

      return () => {
          active = false
      }
  }, [productId])

  if (loading) {
      return <ActivityIndicator style={styles.center} size="large" />
  }

  if (error) {
      return <Text style={styles.center}>{error}</Text>
  }

  if (!product) {
      return <Text style={styles.center}>Không tìm thấy sản phẩm.</Text>
  }

  const imageUrl = Array.isArray(product.images) ? product.images[0] : null

  return (
      <ScrollView contentContainerStyle={styles.container}>
          {imageUrl ? (
              <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
          ) : (
              <Text>Không có ảnh sản phẩm</Text>
          )}

          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.category}>
              Danh mục: {product.category?.name ?? 'Chưa có danh mục'}
          </Text>
          <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 20
    },
    container: {
        padding: 16,
        gap: 12
    },
    image: {
        width: '100%',
        height: 280,
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    price: {
        color: '#47c421',
        fontSize: 18,
        fontWeight: 'bold'
    },
    category: {
        fontWeight: '600'
    },
    description: {
        lineHeight: 22
    }
})