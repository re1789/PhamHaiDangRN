import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CountPressed() {
    const [a, setA] = useState(0)
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.Text1}>Count: {a}</Text>
        <TouchableOpacity onPress = {()=>{setA(a+1)}} style={styles.TouchableOpacity}>
            <Text style={styles.Text2}>Press Here</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
       container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },

    Text1:{
        fontSize: 200,
        fontWeight: '600',
    },

    TouchableOpacity:{
        width: 200,
        height: 50,
        marginTop: 100,
        backgroundColor: 'lightgray',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5
    },

    Text2:{
        fontSize: 30,
        fontWeight: '600',
        color: "white",
    },
})