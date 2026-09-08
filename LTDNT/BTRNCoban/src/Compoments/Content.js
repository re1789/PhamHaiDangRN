import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { dataFeeds } from '../../NewFeed/data_feed'
import { Feather, FontAwesome6 } from '@expo/vector-icons'

export default function Content() {
const renderItem = ({ item, index }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imga}>

        <Image source={{ uri: item.image }} style={styles.img} />

      </View>
    </View>
  )
}
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataFeeds}
        keyExtractor={(item, index) => {return index.toString()}}
        renderItem={({ item, index }) => {

          return (
            <View style={styles.card}>
              <View style={styles.imga}>

                <Image source={{ uri: item.image }} style={styles.img} />

                <View style={styles.info}>
                  <Text>{item.title}</Text>
                  <Text style={styles.tentg}>
                    {item.name} {item.time}
                  </Text>
                </View>

                <TouchableOpacity 
                onPress={() => {}} 
                style={styles.moreButton}>
                  <Feather 
                  name="more-horizontal" 
                  size={20} 
                  color="gray" />
                </TouchableOpacity>
              </View>

              <Text>{item.content}</Text>

              <View style={styles.interaction}>
                <TouchableOpacity 
                onPress={() => {}} 
                style={styles.heartIcon}>
                  <FontAwesome6
                    name="heart"
                    size={20}
                    color='gray'
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                  <FontAwesome6 name="comment" size={20} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 1)',
  },
  card: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  img: {
    width: 100,
    height: 100,
    marginHorizontal: 8,
    borderRadius: 50,
  },
  tentg: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  imga: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  interaction: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 12,
  },
  heartIcon: {
    marginRight: 16,
  },
  moreButton: {
    marginLeft: 'auto',
    marginRight: 10,
  },
})