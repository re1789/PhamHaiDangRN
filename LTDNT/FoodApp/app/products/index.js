import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Image } from 'react-native';
import Detail from '../../Component/Detail';
import { categoryData, menuData } from '../../Constant';

export default function index() {
    const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>Màn hình chi tiết sản phẩm {id}</Text>
      <Detail
        item={menuData}
      />
    </View>
  )
}