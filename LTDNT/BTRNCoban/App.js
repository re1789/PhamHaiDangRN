import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Appbar from './src/Compoments/Appbar';
import Avatars from './src/Compoments/Avatars';
import Contents from './src/Compoments/Contents';

export default function App() {
  return (
    <SafeAreaProvider>
      <Appbar/>
      <Avatars/>
      <Contents/>
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
