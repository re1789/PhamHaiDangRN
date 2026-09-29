import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function PostItem({ post }) {
  return (
    <View style = {styles.container}>
      <View style = {styles.card}>
        <Text style = {styles.Text}>{post.id}</Text>
        <Text style = {styles.Text}>{post.title}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3d137',
    paddingVertical: 10,
    
  },
  card: {
    backgroundColor: '#f7ed67',
    width: 150,
    height: 150,
    marginHorizontal: 5,
    padding: 10
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#d6a400'
  }
})