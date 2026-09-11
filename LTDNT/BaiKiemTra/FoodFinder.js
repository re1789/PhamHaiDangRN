import { View, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function FoodFinder() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchIcon}>
        <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
          <Ionicons 
          name='search' 
          size={18} 
          color='#666' />
        </TouchableOpacity>

        <TextInput
          placeholder='Bạn đang thèm gì nào...'
          style = {styles.input}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10
  },
  searchIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 18,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  iconButton: {
    marginRight: 8,
  },
  input:{
    color: 'lightgray',
    width: 500
  }
})