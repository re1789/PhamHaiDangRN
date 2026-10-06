import { View, Text } from 'react-native'
import React from 'react'
import Appbar from '../component/Appbar'
import Footer from '../component/Footer'
import { StyleSheet } from 'react-native'
import UserForm from '../component/UserForm'

export default function UserPost() {
  const postUser = async ( user ) => {
        await fetch ('https://api.escuelajs.co/api/v1/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify ( user )
            }
        )
        const data = await postUser.JSON
    };
  return (
    <View style = {styles.container}>
      <Appbar
        leftIcon = 'menu'
        title = ''
        rightIcon= 'https://i1.sndcdn.com/artworks-96JSClFLpAx79Njf-Zzf0dA-t240x240.jpg'
      />
      <UserForm/>
      <Footer
        companyName = 'Fake Store API'
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})