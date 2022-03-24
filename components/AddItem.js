import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { useState } from 'react'

const AddItem = ({ onPress }) => {

  const [text, setText] = useState(null)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TextInput
        placeholder='ej. Paquete de Fideos'
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          Keyboard.dismiss()
          onPress(text)
          setText(null)
        }}
      >
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default AddItem

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex : 1
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '60%',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  addButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  }
})