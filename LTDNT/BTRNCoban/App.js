import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewFeed from './src/screens/NewFeed';
import ListFind from './src/Bai_tap_4/ListFind';

export default function App() {
  return (
    <SafeAreaProvider>
      <ListFind/>
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
