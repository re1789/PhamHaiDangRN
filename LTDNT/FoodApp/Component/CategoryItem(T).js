import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { categoryData } from '../Constant'
import { Image } from 'react-native'
import { FlatList } from 'react-native'
import { StyleSheet } from 'react-native'

export default function CategoryItem({ListTitle1, ListTitle2, ListFood, Food}) {
    const renderItem = ({item}) => {
        return <View style={styles.ListItem}>
            <View style={styles.ListImage}>
                <Image style={styles.img} source={{uri: item.icon}}/>
            </View>
            <View>
                <Text style={styles.ListText}>{item.name}</Text>
            </View>
        </View>
    }
  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.title}>{ListTitle1}</Text>
        <Text style={styles.title}>{ListTitle2}</Text>

        <TouchableOpacity activeOpacity={0.7}>

            <View style={styles.list}>

                <FlatList
                    data={categoryData}
                    keyExtractor={(item, index) => {
                        return index.toString()
                    }}
                    renderItem={renderItem}
                    horizontal
                />

            </View>

        </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
    },
    img:{
        width: 50,
        height: 50,
        borderRadius: 25,
        alignContent: 'center'
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent:'center'
    },
    ListImage:{
        backgroundColor: 'lightgray',
        width: 70,
        height: 70,
        borderRadius: 35,
        marginHorizontal: 10,
        marginTop: 10
    },
    title:{
        fontSize: 48,
        fontWeight: 'bold',
        backgroundColor: 'lightgray'

    },
    list:{
        padding: 15,
        justifyContent: 'center',
    },
    ListItem:{
        backgroundColor: 'white',
        width: 90,
        height: 150,
        borderRadius: 999,
        alignContent: 'center'
    },
    ListText:{
        textAlign:'center'
    }
})