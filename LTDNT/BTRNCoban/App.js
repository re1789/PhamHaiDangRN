import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewFeed from './src/screens/NewFeed';
import ListFind from './src/Bai_tap_4/ListFind';
import AppbarWithProps from './src/Compoments/AppbarWithProps';
import DemoGetAPI from './src/screens/DemoGetAPI';
import DemoPostAPI from './src/screens/DemoPostAPI';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* <AppbarWithProps
        leftIcon='menu'
        title='Appbar'
        rightIcon='search'
      /> */}
      {/* <DemoGetAPI/> */}
      <DemoPostAPI/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
