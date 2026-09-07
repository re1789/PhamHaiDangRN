import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Appbar from './src/Compoments/Appbar';
import Avatars from './src/Compoments/Avatars';
import Content from './src/Compoments/Content';

export default function App() {
  return (
    <SafeAreaProvider>
      <Appbar/>
      <Avatars/>
      <Content/>
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
