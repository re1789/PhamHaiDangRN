import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { dataFeeds } from '../../NewFeed/data_feed'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons/build/Icons'

export default function Contents() {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={dataFeeds}
            keyExtractor = {(item, index) => {
                return item.name + index.toString()
            }}
            renderItem = {({item, index}) => {
                return <SafeAreaView >
                    <View style={styles.headerRow}>

                        <Image source={{ uri: item.image }} style={styles.img} />

                        <View style={styles.nameContainer}>

                            <View style={styles.feeds1}>

                                <Text style={styles.title}>{item.title}</Text>

                                <TouchableOpacity activeOpacity={0.7}>
                                    <FontAwesome
                                        name="ellipsis-h"
                                        size={24}
                                        color="black"
                                    />
                                </TouchableOpacity>

                            </View>

                            <View style={styles.feeds2}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>

                        </View>
                    </View>
                    <Text style={styles.content}>{item.content}</Text>
                    <FontAwesome

                    />
                </SafeAreaView>
            }}
        />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    feeds1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    feeds2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameContainer: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        marginTop: 5,
        fontWeight: '600',
        fontSize: 16,
        color: 'gray'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },
    time: {
        fontSize: 14,
        color: 'gray'
    },
    content: {
        marginTop: 5,
        fontSize: 16,
        color: 'black'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 15
    }
})