import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BTFlexbox from './src/screens/BTFlexbox1';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BTFlexbox2 from './src/screens/BTFlexbox2';
import AdidasImage from './src/screens/AdidasImage';
import DemoBtn from './src/screens/DemoBtn';
import CountPressed from './src/screens/CountPressed';
import BanHang from './src/Free_to_create/BanHang';
import Tong from './src/screens/Tong';
import Tongtong from './src/screens/tongtong';
import DS34Tinh from './src/screens/DS34Tinh';
import Ship from './src/screens/Ship';
import DemoMap from './src/screens/DemoMap';
import BaiKT from './src/screens/BaiKT';
import DemoFlatlist from './src/screens/DemoFlatlist';
import Appbar from './src/Compoments/Appbar';
import Avatars from './src/Compoments/Avatars';

export default function App() {
  return (
    <SafeAreaProvider>
      <Appbar/>
      <Avatars/>
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
