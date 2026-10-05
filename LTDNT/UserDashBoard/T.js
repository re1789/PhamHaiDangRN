import { View, Text, Image, TouchableOpacity, StyleSheet,} from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function UserItem({user, onEditPress, onDeletePress}) {
  const colors ={
    admin: '#33CCFF',
    customer: '#33FF00'
  }
  const badgecolors = colors[user.role]
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: user.avatar}}/>

      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{user.name}</Text>
        <Text style={styles.emailText}>{user.email}</Text>
      </View>

      {badgecolors? (

      <TouchableOpacity 
        style={[styles.badge, {backgroundColor: badgecolors}]}
        onPress={onEditPress(user.id)}
      >
        <Text style={styles.badText}>{user.role}</Text>
      </TouchableOpacity>) : (

      <TouchableOpacity
        onPress={onEditPress(user.id)}
        style={styles.button}
      >
        <Ionicons
          name='pencil'
          size={24}
          color='black'
        />
      </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={onDeletePress(user.id)}
        style={styles.button}
      >
        <Ionicons
        name='trash-outline'
        size={24}
        color='black'
      />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    badgecolors: '#ffff',
    borderRadius: 16,
    padding: 12,
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center'
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  emailText: {
    fontSize: 20,
    color: 'black'
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
    marginRight: 6,
  },
  badText: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    padding: 6,
    marginLeft: 4,
  },
})