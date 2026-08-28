import { Image, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';

export default function BaiKT() {
      const contacts = [
    {
      id: '1',
      name: 'Bill Gates',
      company: 'Microsoft Company',
      avatar:
        'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '2',
      name: 'Elon Musk',
      company: 'Tesla Company',
      avatar:
        'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: '3',
      name: 'Jeff Bezos',
      company: 'Amazon Company',
      avatar:
        'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: '4',
      name: 'Joe Belfiore',
      company: 'Microsoft Company',
      avatar:
        'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: '5',
      name: 'Joe Biden',
      company: 'President American',
      avatar:
        'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: '6',
      name: 'Mark Zuckerberg',
      company: 'Microsoft Company',
      avatar:
        'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      id: '7',
      name: 'Vladimir Putin',
      company: 'President Russia',
      avatar:
        'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ];
  
  return (
    <SafeAreaView style={styles.container}>
        {contacts.map((contact) => (
            <View style={styles.contactRow}>
                <Image source={{ uri: contact.avatar }} style={styles.image} />
                <View>
                    <Text style={styles.name}>{contact.name}</Text>
                    <Text style={styles.company}>{contact.company}</Text>
                </View>
            </View>
        ))}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    },
    company: {
    fontSize: 16,
    color: 'gray',
    },
});