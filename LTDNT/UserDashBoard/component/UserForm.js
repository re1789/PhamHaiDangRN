import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Image } from 'react-native'
import { Button } from 'react-native'

export default function UserForm() {
  const [pass, setPass] = useState(false)
  const [role, setRole] = useState('Admin')

  return (
    <View style = {styles.container}>
      <Text style={styles.title}>ADD NEW USER</Text>
      <Text style={styles.txt}>Full Name</Text>
      <View style = {styles.Input}>
        <Ionicons style={styles.icon} name='person-outline' size={20} color='black' />
        <TextInput style={styles.input} keyboardType='text' />
      </View>
      <Text style={styles.txt}>Email Address</Text>
      <View style = {styles.Input}>
        <Ionicons style={styles.icon} name='mail-outline' size={20} color='black' />
        <TextInput style={styles.input} keyboardType='email-address' />
      </View>
      <Text style={styles.txt}>Password</Text>
      <View style = {styles.Input}>
        <TextInput
          style={styles.input}
          secureTextEntry={!pass}
        />
        <TouchableOpacity onPress={() => setPass(!pass)}>
          <Ionicons
            style={styles.icon}
            name={pass ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color='black'
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>Role</Text>
      <Picker
        selectedValue={role}
        onValueChange={(itemValue) => setRole(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Admin" value="Admin" />
        <Picker.Item label="Customer" value="Customer" />
      </Picker>
      <Text style={styles.txt}>Avatar URL</Text>
      <View style = {styles.Input}>
        <TextInput style={styles.input} placeholder="https://image for image link" keyboardType='url' />
      </View>
      <View style = {styles.btn}>

        <TouchableOpacity>
          <Text style = {styles.btnCancel}>CANCEL</Text>
        </TouchableOpacity>

          <Button style = {styles.btnSave}>SAVE USER</Button>

      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  icon: {
    width: 50,
    height: 30,
    paddingLeft: 15,
    alignItems: 'center',
    alignContent: 'center',
  },
  Input: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  txt: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    borderWidth: 0,
    outlineWidth: 0,
    backgroundColor: 'transparent',
  },
  picker: {
    fontSize: 18,
    height: 45,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 10
  },
  btnCancel: {
    color: '#22397a',
    fontWeight: 'bold',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#22397a'
  },
  btnSave: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#22397a',
    borderWidth: 1,
    borderRadius: 5,
    borderRadius: 5,
    borderColor: '#22397a',
    padding: 10
  }
})