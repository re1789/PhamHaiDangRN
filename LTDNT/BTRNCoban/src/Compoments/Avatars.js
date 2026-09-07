import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
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
    width: 150,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius:20,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
});