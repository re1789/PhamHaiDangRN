import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { CUAHANG } from './FoodData'

export default function Contents() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={item.photo} style={styles.image} />
          <View style={styles.namecard}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cửa hàng tốt nhất trong khu vực</Text>
      <FlatList
        data={CUAHANG}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        horizontal
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 12,
    marginHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  card: {
    marginTop: 20,
    width: 140,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  namecard: {
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  name: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
    fontWeight: 'bold'
  },
})