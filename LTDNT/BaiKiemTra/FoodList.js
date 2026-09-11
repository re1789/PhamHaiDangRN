import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { FlatList } from 'react-native'
import { NHOMMONAN } from './FoodData'
import { StyleSheet } from 'react-native'

export default function FoodList() {
    const renderItem = ({item}) => {
        return (

        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={item.icon} style={styles.img} />
                <Text style={styles.txt}>{item.name}</Text>
            </TouchableOpacity>
        </View>
        )
    }
  return (
    <SafeAreaView>
        <View>
            <FlatList
                data={NHOMMONAN}
                keyExtractor={(item, index) => {
                    return index.toString()
                }}
                renderItem={renderItem}
                horizontal
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        marginHorizontal: 10
    },
    listContainer:{
        paddingHorizontal: 8,
        paddingVertical: 10,
        alignItems: 'center'
    },
    img:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
    },
    txt:{
        textAlign: 'center',
        fontSize: 12,
        color: '#333',
        lineHeight: 16,
    }
})