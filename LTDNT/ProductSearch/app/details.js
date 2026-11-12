import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { Carousel } from 'react-native-reanimated-carousel'

export default function ProductDetail() {
  const { id } = useLocalSearchParams()
  const productId = Array.isArray(id) ? id[0] : id

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const {width} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

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
  const images = Array.isArray(product.images) ? product.images.filter( (url) => typeof url === 'string' && url.trim() !== '' ) : []

  const imageUrl = Array.isArray(product.images) ? product.images[0] : null

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.length > 0 ? (
        <View>
          <Carousel
            data={images}
            style={{ width: width - 32, height: 280 }}
            loop={false}
            onSnapToItem={setActiveIndex}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={styles.image}
                resizeMode="cover"
              />
            )}
          />
          <Text style={{ textAlign: 'right', marginTop: 4 }}>
            {activeIndex + 1}/{images.length}
          </Text>
        </View>
      ) : (
        <Text>Không có ảnh sản phẩm</Text>
      )}

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
      <Text style={styles.category}>
        Danh mục: {product.category?.name ?? 'Chưa có danh mục'}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => {}}>
        <Text style={{ color: 'white'}}>Add to cart</Text>
      </TouchableOpacity>
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
    },
    button: {
        borderColor: 'blue',
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#132ced',
    }
})