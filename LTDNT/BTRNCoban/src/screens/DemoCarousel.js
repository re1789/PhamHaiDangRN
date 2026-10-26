import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Carousel } from 'react-native-reanimated-carousel';

export default function DemoCarousel() {
  const data = [
    { id: '1', image: 'https://picsum.photos/600/400?1' },
    { id: '2', image: 'https://picsum.photos/600/400?2' },
    { id: '3', image: 'https://picsum.photos/600/400?3' },
  ];

  const { width } = Dimensions.get('window');

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <Text style={styles.title}>DemoCarousel</Text>
      <Carousel
        loop
        autoplay
        data={data}
        style={{ width, height: 900 }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image
              source={{ uri: item.image }}
              style={styles.img}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    margin: 12,
  },
  slide: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});