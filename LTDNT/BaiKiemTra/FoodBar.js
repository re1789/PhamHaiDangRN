import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import FontAwesomeFreeSolid from '@react-native-vector-icons/fontawesome-free-solid'
import Ionicons from '@react-native-vector-icons/ionicons'
import { StyleSheet } from 'react-native'

export default function FoodBar() {
  return (
    <SafeAreaView style = {styles.container}>
        {/* Header */}
        <View style ={styles.header}>

            <TouchableOpacity activeOpacity={0.7} onPress={()=>{}}>
              <FontAwesomeFreeSolid
              name='arrow-left'
              size={24}
              color="black"
              style ={styles.arrowLeft}
            />
            </TouchableOpacity>

            <View style = {styles.txtHeader}>
              <Text style = {styles.txt1}>Giao đến</Text>
              <Text style = {styles.txt2}>Đà nẵng, Việt Nam
                <TouchableOpacity activeOpacity={0.7}>
                  <Ionicons
                  name='caret-down'
                  size={24}
                  color="white"
                />
                </TouchableOpacity>
              </Text>
            </View>

            <View style = {styles.icon}>
              {/* Nút book */}
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons
                name='bookmarks-outline'
                size={24}
                color="white"
                />
              </TouchableOpacity>

              {/* Nút thông báo */}
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons
                name='notifications-outline'
                size={24}
                color="white"
                />
              </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'lightblue',
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  arrowLeft:{
    padding: 5,
    marginTop: 5
  },
  txtHeader:{
    flex: 1,
    marginHorizontal: 8,
  },
  txt1:{
    fontSize: 14,
    color: 'white'
  },
  txt2:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  icon:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  iconBtn:{
    marginLeft: 12,
  }
})