import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './component/Appbar';
import User from './screen/User';
import Users from './TESST/Users';

export default function App() {
  return (
    <View style = {styles.container}>
      <User/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
