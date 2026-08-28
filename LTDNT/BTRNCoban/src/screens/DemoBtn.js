import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native'

export default function DemoBtn() {
  return (
    <SafeAreaView>
        <Text>DemoBtn</Text>
        <Button 
            title='Click here' 
            onPress={()=>{alert('You pressed the button')}}>
        </Button>
    </SafeAreaView>
  )
}