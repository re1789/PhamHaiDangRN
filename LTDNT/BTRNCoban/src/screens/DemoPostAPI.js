import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { StyleSheet } from 'react-native'

export default function DemoPostAPI() {
    const user = {
    "email": "dangpham@gmail.com",
    "password": "memaybeo",
    "name": "Hai Dang",
    "role": "admin",
    "avatar": "https://i.imgur.comhttps://open.spotify.com/intl-vi/artist/4Vg2yjssInPiSSOdPgWIkQ/LDOO4Qs.jpg",
  }

//   Viết hàm để POST USER trên về server
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
    <View>
      <Button styles = {styles.Button} onPress = {() => { postUser ( user )}}>DemoPostAPI</Button>
    </View>
  )
}
const styles = StyleSheet.create({
    Button: {
        width: 200,
        height: 90
    }
})