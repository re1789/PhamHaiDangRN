import { View, Text, Image } from 'react-native'
import React from 'react'
import { dataAvatars } from '../../NewFeed/data_feed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { StyleSheet } from 'react-native'

export default function Avatars() {
    const renderItem = ({ item }) => (
        <View style={(styles.container)}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
        </View>
    );
  return (
    <SafeAreaView>
        <FlatList
            data={dataAvatars}
            keyExtractor = {(item, index) => {
                return item.name + index.toString()
            }}
            renderItem={renderItem}
            horizontal
        />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 15
    },
    name: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: '600',
    }

})
