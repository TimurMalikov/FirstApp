import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const ButtonText = ({ title, onPress }) => (
  <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#00ADD3'
  },
  buttonText: {
    fontSize: 25,
    color: '#00ADD3'
  }
})

export default ButtonText
