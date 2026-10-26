import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './component/Appbar';
import Users from './TESST/Users';
import User from './screen/User';
import UserPost from './screen/UserPost';
import ProductList from './screen/ProductList';

export default function App() {
  return (
    <View style = {styles.container}>
      <User/>
      <UserPost/>
      <ProductList/>
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
