import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BookingFood from './BookingFood';

export default function App() {
  return (
    <SafeAreaProvider>
      <BookingFood/>
    </SafeAreaProvider>
  );
}
