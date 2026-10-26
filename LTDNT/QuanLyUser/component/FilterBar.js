import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native'

export default function FilterBar({roles, selectedRole, onPress}) {
  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Filter by role:</Text>
        <FlatList
          data={roles}
          renderItem={({item}) => {
            return <TouchableOpacity 
            style={[styles.touch, selectedRole === item && styles.selectedTouch]} 
            onPress={() => {onPress(item)}}>
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
          }}
          keyExtractor={(item) => {return item}}
          horizontal
          contentContainerStyle={styles.flatList}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      margin: 10,
      alignContent: 'center',
      flexDirection: 'row',
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingVertical: 10,
      marginRight: 10,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    touch: {
      borderWidth: 1,
      backgroundColor: '#ffffff',
      borderRadius: 50,
      paddingHorizontal: 10,
      paddingVertical: 6,
    },
    selectedTouch: {
      backgroundColor: '#cecece',
    },
    flatList: {
      justifyContent: 'space-between',
      flexGrow: 1,
    }

})