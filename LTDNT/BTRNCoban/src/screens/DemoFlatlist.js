import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';

export default function DemoFlatlist() {
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
    <SafeAreaView>
        <SafeAreaView>
            <Text>DemoFlatlist</Text>
        </SafeAreaView>

        <FlatList
            data={contacts}

            renderItem = {(item, index, separators) => {
                return <SafeAreaView>
                    <Text>{item.item.name}</Text>
                    <Text>{item.item.company}</Text>
                </SafeAreaView>
            }}
            keyExtractor = {(item, index) => {
                return item.id.toString()
            }}
            ListHeaderComponent={
                <SafeAreaView>
                    <Text>Danh sách người nổi tiếng</Text>
                </SafeAreaView>
            }
            ListEmptyComponent={
                <SafeAreaView>
                    <Text>Danh sách rỗng</Text>
                </SafeAreaView>
            }
            ListFooterComponent={
                <Text>Nobody</Text>
            }
            horizontal
        />
    </SafeAreaView>
  )
}