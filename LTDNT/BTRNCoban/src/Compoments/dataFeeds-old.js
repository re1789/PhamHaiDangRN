import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
export const dataFeeds = [
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sahara",
        image: 'https://i.pravatar.cc/150?img=1',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes"
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sophia",
        image: 'https://i.pravatar.cc/150?img=2',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "3 minutes"
    
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Hana",
        image: 'https://i.pravatar.cc/150?img=3',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "5 minutes"
    
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Naul",
        image: 'https://i.pravatar.cc/150?img=4',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "10 minutes"
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Kimihana",
        image: 'https://i.pravatar.cc/150?img=5',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes"
    }
]

export default function dataFeeds() {
  return (
    <SafeAreaView>
        <FlatList
            data={dataFeeds}
            renderItem={({ item, index, separator }) => {
                return <SafeAreaView>
                    <Image source={{ uri: item.image }} style={styles.img} />
                    <Text>{item.title}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.time}</Text>
                    <Text>{item.content}</Text>
                </SafeAreaView>
            }}
            keyExtractor={(item, index) => {
                return item.name + index.toString()
            }}
        />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    feedCard: {
      backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    headerTextContainer: {
        flex: 1,
        marginLeft: 8,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    moreBtn: {
        padding: 4,
    },
    subInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})