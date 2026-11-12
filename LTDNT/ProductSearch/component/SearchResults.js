import { View, Text, FlatList, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function SearchResults({products, onPress}) {
    const {width} = useWindowDimensions();
    const column = width < 600 ? 3 : width < 900 ? 4 : 5;
    const router = useRouter()
  return (
    <View style = {styles.container}>
      <Text style = {styles.txt}>SearchResults</Text>
      <FlatList
        data = {products}
        keyExtractor = {(item) => String(item.id)}
        renderItem = {({item}) => <TouchableOpacity style = {styles.container_} onPress = {() => router.push({ pathname: '/details', params: { id: String(item.id) } })}>
            <Image style = {styles.img} source={{uri: item.images?.[0]}}/>
            <View style = {styles.txt_}>
                <Text>{item.title}</Text>
                <Text>$ {item.price}</Text>
                <Text>{item.category.name}</Text>
            </View>
        </TouchableOpacity>}
        ListEmptyComponent = {<Text>Không tìm thấy sản phẩm</Text>}
        numColumns = {column}
        key={column}
        columnWrapperStyle= {{gap: 8}}
        style = {styles.flat}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  txt_: {
    padding: 5
  },
  container_: {
    flex: 1,
    marginBottom: 12,
    borderRadius: 10,
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: 100,
  },
  flat: {
    width: '100%',
  }
})