import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function UserItem({item, onEditPress, onDeletePress}) {
    const color = {admin: '#0052af', customer: '#00af4e'}
    const badgeColor = color[item.role]
  return (
    <View style = {styles.container}>
      <Image source={{uri: item.avatar}}/>
      <View style = {styles.userInfo}>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.email}
        </Text>
      </View>
      <View style = {styles.badged}>
        {badgeColor? (
        <TouchableOpacity onPress={onEditPress(item.id)} style = {[styles.badge, {backgroundColor: badgeColor}]}>
            <Text>{item.role}</Text>
        </TouchableOpacity>
      ):(
        <TouchableOpacity onPress={onEditPress(item.id)} style = {[styles.badge, {backgroundColor: badgeColor}]}>
            <Ionicons
                name = "pencil"
                size = {24}
                color = "black"
            />
        </TouchableOpacity>
      )}
        <TouchableOpacity onPress={onDeletePress(item.id)}>
            <Ionicons
                name = "trash"
                size = {24}
                color = "white"
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    userInfo: {
        flex: 1,
        flexShrink: 1,
        minWidth: 0,
        marginRight: 8,
    },
    badge: {
        width: 100,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 16,
        marginRight: 6,
        flexShrink: 0,
    },
    badged: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10,
        flexShrink: 0,
    }
})