import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function Index() {
    const [email,setemail]=useState('')
    const [PassWord,setPassWord]=useState('')
    const payload={
        "email": email,
        "PassWord":PassWord
}
    const login=async() => { 
        try{
            const respone=await fetch('https://api.escuelajs.co/api/v1/auth/login',
                {
                    method:'POST',
                    headers:{
                        'Content-Type':'Application/json'
                    },
                    body:JSON.stringify(payload)
                }
            )
            console.log(await respone.json())
        }
        catch(err){

     }

    }
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Register Now</Text>
      <View style = {styles.register}>
        <View style = {styles.innerRegister}>
            <Text style = {styles.Text}>Email</Text>
            <View style = {styles.Input}>
                <Ionicons
                    name = 'mail-outline'
                    size = {24}
                    color = 'black'
                />
                <TextInput
                    style = {styles.input}
                />
            </View>
            <Text style = {styles.Text}>Password</Text>
            <View style = {styles.Input}>
                <Ionicons
                    name = 'lock-closed-outline'
                    size = {24}
                    color = 'black'
                />
                <TextInput
                    style = {styles.input}
                    secureTextEntry
                />
            </View>
        </View>
        <View style = {styles.btn}>
            <TouchableOpacity activeOpacity={0.7} style = {styles.in}>
                <Text>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style = {styles.up}>
                <Text>SIGN UP</Text>
            </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#019589'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 150,
        paddingBottom: 40,
        paddingLeft: 25
    },
    register: {
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 1
    },
    innerRegister: {
        margin: 20
    },
    Input: {
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderColor: 'gray',
        borderRadius: 10,
    },
    input: {
        paddingHorizontal: 15,
        fontSize: 16,
        width: '100%',
    },
    Text: {
        paddingTop: 30,
        fontSize: 18,
        fontWeight: 'bold'
    },
    btn: {
        paddingVertical: 50,
        paddingHorizontal: 15,
        alignContent: 'center',
        alignItems: 'center',
    },
    in: {
        backgroundColor: '#019589',
        borderWidth: 1,
        borderColor: '#019589',
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
    },
    up: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#019589',
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        marginTop: 15
    }
})