import { View, Text } from 'react-native'
import React from 'react'

export default function DemoMap() {
const phuongxa=[
    {ma: '01', ten: 'Bình Đông'},
    {ma: '02', ten: 'Bình Hòa'},
    {ma: '03', ten: 'Chí Linh'},
    {ma: '04', ten: 'Hải Vân'},
    {ma: '05', ten: 'Linh Xuân'},
    {ma: '06', ten: 'Phước Long'},
    {ma: '07', ten: 'Tân Phú'},
    {ma: '08', ten: 'Tân Thới'},
]
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>DemoMap</Text>
        {
            phuongxa.map((item, index) => {
                return <Text>{item.ten}</Text>
            })
        }
    </View>
  )
}


















{/* <View style={styles.header}>
  <Text style={styles.title}>Contact</Text>
</View> */}

  // header: {
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  //   paddingVertical: 16,
  //   shadowColor: '#000',
  //   elevation: 4,
  //   boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.18)',
  // },