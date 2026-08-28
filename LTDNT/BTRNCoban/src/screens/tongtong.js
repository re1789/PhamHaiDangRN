import { View, Text } from 'react-native'
import React, { use, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { StyleSheet } from 'react-native'

export default function Tongtong() {
    const[a, setA] = useState('')
    const[b, setB] = useState('')
    const[result, setResult] = useState('')

    const tinhtong = () => {
        const tong = Number(a || 0) + Number(b || 0)
        setResult(String(tong))
    }
    
  return (
    <SafeAreaView style={style.container}>
        <Text>Tính tổng 2 số</Text>
        <TextInput
            style={style.input}
            placeholder='Input number' 
            value={a} 
            keyboardType='numeric'
            onChange={(event) => setA(event.nativeEvent.Text)}
        />
        <TextInput
            style={style.input}
            placeholder='Input number' 
            value={b} 
            keyboardType='numeric'
            onChange={(event) => setB(event.nativeEvent.Text)}
        />
        <Button
        style={style.result}
        title='Tính toán'
        onPress={tinhtong}>
        </Button>
    </SafeAreaView>
  )
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