import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'

export default function FilterProduct() {
  return (
    <View style = {styles.container}>
      <View style = {styles.title}>
        <TextInput style = {styles.inpT} keyboardType='text' placeholder='Nhập tên sản phẩm'/>
      </View>
      <View style = {styles.cost}>

        
        <View style = {styles.Input}>
            {/* <Text style = {styles.txt}>Giá từ</Text> */}
            <TextInput style = {styles.input} keyboardType='number'/>
        </View>

        
        <View style = {styles.Input}>
            {/* <Text style = {styles.txt}>Giá đến</Text> */}
            <TextInput style = {styles.input} keyboardType='number'/>
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    title: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,    
    },
    cost: {
        width: '100%',
        flexDirection: 'row'
    },
    txt: {
        paddingRight: 10,
        paddingLeft: 10
    },
    inpT:{
        height: 40,
        paddingHorizontal: 10,
    },
    Input: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 25,
        borderWidth: 0,
        outlineWidth: 0,
        backgroundColor: 'transparent',
    }
})