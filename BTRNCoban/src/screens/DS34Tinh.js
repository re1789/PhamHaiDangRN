import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown'
import { StyleSheet } from 'react-native'

export default function DS34Tinh() {
 const tinhthanh=[
    {ma: '29', ten: 'Hà nội'},
    {ma: '75', ten: 'Đồng Nai'},
    {ma: '61', ten: 'Bình Dương'},
    {ma: '79', ten: 'Hồ Chí Minh'},
    {ma: '48', ten: 'Đà Nẵng'},
    {ma: '92', ten: 'Cần Thơ'},
 ]
 const[chon, setChon]=useState(null)
 return (
 <SafeAreaView style={style.container}>
    <Text>Chọn tỉnh / thành phố</Text>
    <Dropdown
      data={tinhthanh}
      labelField='ten'
      valueField='ma'
      value={chon}
      onChange={(item)=>{
      setChon(item)
      }}
    />
 {chon && (
    <Text>Vừa chọn tỉnh thành có mã số là {chon.ma} và thành phố {chon.ten}</Text>
 )}
 </SafeAreaView>
 )
}
const style = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 padding: 20,
 backgroundColor: '#7a4141',
 },
})