import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import ProductItem from '../component/ProductItem';

export default function Home() {
    const [sp, setSp] = useState();
    const [costF, setCostF] = useState();
    const [costT, setCostT] = useState();
    const [manhom, setManhom] = useState();

    const [category, setCategory] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);

    // Lấy danh sách nhóm
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/categories')
                const data = await response.json();
                setCategory(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [])

    // Lấy sản phẩm theo điều kiện lọc
    const getFilterProduct = async () => {
        let filterCondition = ''
        filterCondition = sp ? filterCondition + 'title=' + sp : filterCondition
        filterCondition = costF ? filterCondition + '&price_min=' + costF : filterCondition
        filterCondition = costT ? filterCondition + '&price_max=' + costT : filterCondition
        filterCondition = manhom ? filterCondition + 'categoryID=' + manhom : filterCondition
        // https://api.escuelajs.co/api/v1/products/?title=Generic&price_min-900&price_max=1000&id=1
        const response = await fetch('https://api.escuelajs.co/api/v1/products/?' + filterCondition)
        const data = await response.json();
        setFilterProduct(data);
    }

    const onPress = () => { console.log ('Mở màn hình chi tiết') }

  return (
    <View style = {styles.container}>
        <TextInput 
        placeholder='Nhập tên sản phẩm...'
        value={sp}
        onChangeText={setSp}
        style = {styles.inpp}
        />
      <View style = {styles.costA}>
        <View style = {styles.costB}>
            <Text>Giá từ</Text>
            <TextInput
                value={costF}
                onChangeText={setCostF}
                style = {styles.inp}
            />
        </View>
        <View style = {styles.costB}>
            <Text>Giá đến</Text>
            <TextInput
                value={costT}
                onChangeText={setCostT}
                style = {styles.inp}
            />
        </View>
      </View>
      <Dropdown
        data = {category}
        labelField = 'name'
        valueField = 'id'
        value={manhom}
        onChange={(item) => {setManhom(item.id)}}
        style = {styles.cb}
            placeholderStyle={styles.cbText}
            selectedTextStyle={styles.cbText}
      />
      <TouchableOpacity style = {styles.btn} onPress={getFilterProduct}>
        <Text style = {styles.btn2}>Áp dụng lọc</Text>
      </TouchableOpacity>
      <FlatList
        data={filterProduct}
        keyExtractor={(item) => {
            return item.id
        }}
        renderItem={({item}) => {
            return <ProductItem
                product={item}
                onPress={onPress}
            />
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        alignContent: 'center',
        gap: 8,
        flex: 1
    },
    txtSP: {
        borderWidth: 1,
        borderColor: 'gray'
    },
    costA: {
        flexDirection: 'row',
        width: '100%',
        gap: 8,
    },
    costB: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        
    },
    inp: {
        flex: 1,
        minWidth: 0,
        outlineStyle: 'none',
        paddingHorizontal: 5,
    },
    inpp: {
        width: '100%',
        outlineStyle: 'none',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
    },
    cb: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 5
    },
    cbText: {
        lineHeight: 44
    },
    btn: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#178af5'
    },
    btn2: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})