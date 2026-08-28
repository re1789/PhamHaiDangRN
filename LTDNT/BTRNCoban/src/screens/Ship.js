import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown'

export default function Ship() {
    const phuongxa=[
        {ma: '29', ten: 'Bình Đông'},
        {ma: '75', ten: 'Bình Hòa'},
        {ma: '61', ten: 'Chí Linh'},
        {ma: '79', ten: 'Hải Vân'},
        {ma: '48', ten: 'Linh Xuân'},
        {ma: '92', ten: 'Phước Long'},
        {ma: '93', ten: 'Tân Phú'},
        {ma: '94', ten: 'Tân Thới'},
    ]
    const [diemBatDau, setDiemBatDau] = useState(null)
    const [diemKetThuc, setDiemKetThuc] = useState(null)
    const [thongBao, setThongBao] = useState('')
    const [daXacNhan, setDaXacNhan] = useState(false)

    const xuLyXacNhan = () => {
        if (!diemBatDau || !diemKetThuc) {
            setDaXacNhan(false)
            setThongBao('Chọn đầy đủ địa điểm bắt đầu và địa điểm kết thúc !')
            return
        }

        setThongBao('')
        setDaXacNhan(true)
    }

return (
<SafeAreaView style={style.container}>
    <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 16 }}>Ứng dụng giao hàng</Text>
    <Text>Chọn điểm bắt đầu:</Text>
    <Dropdown
    data={phuongxa}
    labelField='ten'
    valueField='ma'
    value={diemBatDau}
    onChange={(item) => setDiemBatDau(item)}
    style={style.dropdown}
    />
    <View style={style.spacing} />
    <Text>Chọn điểm đến:</Text>
    <Dropdown
    data={phuongxa}
    labelField='ten'
    valueField='ma'
    value={diemKetThuc}
    onChange={(item) => setDiemKetThuc(item)}
    style={style.dropdown}
    />
    
    {thongBao ? (
        <Text style={style.message}>{thongBao}</Text>
        ) : daXacNhan && (
        <View style={style.result}>
            <Text>Điểm bắt đầu: {diemBatDau.ten}</Text>
            <Text>Điểm đến: {diemKetThuc.ten}</Text>
        </View>
        )}

    <Pressable 
        style={({ pressed }) => [
        style.button,
        { backgroundColor: pressed ? 'darkorange' : 'orange' }
        ]}
        onPress={xuLyXacNhan}
    >
    <Text style={style.text}>OK</Text>
    </Pressable>
</SafeAreaView>
  )
}

  const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    dropdown: {
        width: 300,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    spacing: {
        height: 16,
    },
    button: {
        width: 250,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 16,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
        result: {
            marginTop: 16,
            alignItems: 'center',
        },
        message: {
            marginTop: 16,
            color: 'red',
            textAlign: 'center',
        },
  })