import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screen/HomeScreen';
import ProductCard from './Component/ProductCard';
import { useState } from 'react';


export default function App() {
  const monan = {
        menuId: 4,
        categoryId: 6,
        name: "Hawaiian Pizza",
        photo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
        description: "Canadian bacon, homemade pizza crust, pizza sauce",
        calories: 250,
        price: 15,
        duration: "35 - 40 min",
        star: 3
    }
  const [maMonan, setMamonan] = useState(null)
  return (
    <SafeAreaProvider style = {styles.container}>
      {/* <HomeScreen/> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeececd2',
  },
});