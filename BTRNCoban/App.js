import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BTFlexbox from './src/screens/BTFlexbox1';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BTFlexbox2 from './src/screens/BTFlexbox2';
import AdidasImage from './src/screens/AdidasImage';
import DemoBtn from './src/screens/DemoBtn';
import CountPressed from './src/screens/CountPressed';
import BanHang from './src/BanHang';
import Tong from './src/screens/Tong';
import Tongtong from './src/screens/tongtong';
import DS34Tinh from './src/screens/DS34Tinh';

export default function App() {
  return (
    <SafeAreaProvider>
      <DS34Tinh></DS34Tinh>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
