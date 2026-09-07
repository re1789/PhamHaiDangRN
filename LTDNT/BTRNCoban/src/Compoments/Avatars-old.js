import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

export const dataAvatars = [
    {
        name: 'Sahara',
        image: 'https://i.pravatar.cc/150?img=1',
    },
    {
        name: 'Sophia',
        image: 'https://i.pravatar.cc/150?img=2',
    },
    {
        name: 'Hana',
        image: 'https://i.pravatar.cc/150?img=3',
    },
    {
        name: 'Naul',
        image: 'https://i.pravatar.cc/150?img=4',
    },
    {
        name: 'Kimihana',
        image: 'https://i.pravatar.cc/150?img=5',
    },
    {
        name: 'Yoko',
        image: 'https://i.pravatar.cc/150?img=6',
    },
    {
        name: 'Su',
        image: 'https://i.pravatar.cc/150?img=7',
    },
    {
        name: 'Finnia',
        image: 'https://i.pravatar.cc/150?img=8',
    },
    {
        name: 'Subana',
        image: 'https://i.pravatar.cc/150?img=9',
    },
    {
        name: 'Corohe',
        image: 'https://i.pravatar.cc/150?img=10',
    }
]

export default function Avatars() {
  const renderItem = ({ item }) => (
    <View style={styles.storyItem}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dataAvatars}
        keyExtractor={(item, index) => item.name + index.toString()}
        renderItem={renderStoryItem}
        contentContainerStyle={styles.listContent}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },
  listContent: {
    paddingHorizontal: 10,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 60,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginBottom: 6,
  },
  name: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
});