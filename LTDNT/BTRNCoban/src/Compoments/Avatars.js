import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { dataAvatars } from '../../NewFeed/data_feed';

export default function Avatars() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.img}>
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <View style={styles.container}>
      <FlatList
        data={dataAvatars}
        keyExtractor={(item, index) =>{
           return index.toString()
        }}
        renderItem={renderItem}
        horizontal
      />
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
  },
  img: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 60,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius:33,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
});