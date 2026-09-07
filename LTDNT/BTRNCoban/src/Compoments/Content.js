import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { dataFeeds } from '../../NewFeed/data_feed'
import { Feather, FontAwesome, FontAwesome6 } from '@expo/vector-icons'

export default function Content() {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data = {dataFeeds}
            renderItem = {({item, index}) => {
                return (
                    <View>
                        <View style={styles.imga}>
                            <img src={item.image} alt={item.name} style={styles.img}/>

                            <View style={styles.Info}>
                              <Text>{item.title}</Text>
                              <Text style={styles.tentg}>{item.name} {item.time}</Text>
                            </View>

                            <TouchableOpacity
                              onPress={() => {}}
                              style={styles.moreButton}
                            >
                              <Feather
                                name="more-horizontal"
                                size={20}
                                color="gray"
                              />
                            </TouchableOpacity>
                        </View>
                        
                        
                        <Text>{item.content}</Text>

                        
                        <View style={styles.interaction}>
                            <TouchableOpacity
                              onPress={() => {}}
                              style={styles.heartIcon}
                            >
                              <FontAwesome6
                                name="heart"
                                size={20}
                                color="gray"
                              />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                              <FontAwesome6
                                name="comment"
                                size={20}
                                color="gray"
                              />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}
            keyExtractor = {(item, index) => {
                return index.toString()
            }}
        />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 65,
    height: 65,
    alignItems: 'center',
    marginHorizontal: 8,
    borderRadius: 20
  },
  tentg: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,

  },
  imga: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Info: {
    flex: 1,
  },
  interaction: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  heartIcon: {
    marginRight: 16,
  },
  moreButton: {
    marginLeft: 'auto',
    marginRight: 10,
  }
})