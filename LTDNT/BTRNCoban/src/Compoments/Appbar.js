import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Appbar() {
  return (

    <View style={styles.AppbarContainer}>
      {/* Camera icon ho ho ho */}
      <TouchableOpacity activeOpacity={0.7}>
        <FontAwesome
          name="camera"
          size={24}
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Tiêu đề hẹ hẹ hẹ */}
      <Text style={styles.headerTitle}>Feed</Text>
    
      {/* Edit icon ho ho ho */}
      <TouchableOpacity activeOpacity={0.7}>
        <FontAwesome
          name="edit"
          size={24}
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  AppbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0', 
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});