import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { dataAvatars } from '../../NewFeed/data_feed'
import { FlatList } from 'react-native'
import { StyleSheet } from 'react-native'

export default function ListFind() {
    const renderItem = ({ item }) => {
        return (
          <View style={styles.img}>
            <Image style={styles.avatar} source={{ uri: item.image }} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        );
      };
    const renderFriends = ({item}) => {
        return (
            <View style={styles.imgFr}>
                <Image style={styles.avatar} source={{ uri: item.image }} />
                <Text style={styles.name}>{item.name}</Text>
                <Text>15 bạn chung</Text>
            </View>
        )
    }
  return (
    <SafeAreaView>
        <View >
            <TouchableOpacity activeOpacity={0.8} style={styles.history}>

                <FontAwesome
                    name="history"
                    size={24}
                    color='black'
                />
                <Text>Danh sách tìm kiếm gần đây</Text>

            </TouchableOpacity>
            <FlatList
                data={dataAvatars}
                keyExtractor={(item, index) =>{
                    return index.toString()
                }}
                renderItem={renderItem}
                horizontal
            />
        </View>
        <View style={styles.suggest}>
            <Ionicons
                name="people"
                size={24}
                color='black'
            />
            <Text>Gợi ý kết bạn</Text>

            <FlatList
                data={dataAvatars}
                keyExtractor={(item, index) =>{
                    return index.toString()
                }}
                renderItem={renderFriends}
            />

        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{

    },
    img: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 60,
    },
    imgFr:{
        flexDirection: 'row',
        padding: 10
    },
    avatar:{
    width: 65,
    height: 65,
    borderRadius:33,
    },
    name:{
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    },
    history:{
        flexDirection: 'row',
        padding: 10
    },
    suggest:{
        flexDirection: 'row',
        padding: 10
    }
})