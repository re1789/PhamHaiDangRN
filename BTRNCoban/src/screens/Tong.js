import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tong() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    const sum = numA + numB;
    setResult(sum);
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>Tính Tổng Hai Số</Text>

      <TextInput
        style={style.input}
        value={a}
        placeholder="Nhập số a..."
        keyboardType="numeric"
        onChange={(event) => setA(event.nativeEvent.text)}
      />

      <TextInput
        style={style.input}
        value={b}
        placeholder="Nhập số b..."
        keyboardType="numeric"
        onChange={(event) => setB(event.nativeEvent.text)}
      />

      <Button title="Tính Tổng" onPress={handleCalculate} />

      {result !== null && (
        <Text style={style.result}>Kết quả tổng: {result}</Text>
      )}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: 'green',
    textAlign: 'center',
  },
});