import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function Appbar({ leftIcon, title, rightIcon }) {
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity>
        <Ionicons name={leftIcon} size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity>
        <Ionicons name={rightIcon} size={24} color="black" />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 10,
    height: 48,
    paddingTop: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
    borderRadius: 999,
    paddingHorizontal: 30,
    paddingVertical: 6
  },
})