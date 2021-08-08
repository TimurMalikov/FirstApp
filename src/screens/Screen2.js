import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, TextInput, View, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { useKeyboard } from '@react-native-community/hooks'
import { useLogin } from '../context'
import Header from '../components/Header'
import Button from '../components/Button'

const secure = {
  login: '123',
  password: '123'
}

const Screen2 = () => {
  const inputRef = useRef() 
  const [isFirst, setIsFirst] = useState(true) 
  const [isAnimatable, setIsAnimatable] = useState(false) 
  const [valueLogin, setValueLogin] = useState('') 
  const [valuePassword, setValuePassword] = useState('') 
  const navigation = useNavigation() 
  const keyboard = useKeyboard()

  const { setUserLogin } = useLogin()

  // const createAlert = () =>
  //   Alert.alert('PLEASE ENTER CORRECT DATA', 'Incorrect Login/Password', [
  //     // {
  //     //   text: 'Cancel',
  //     //   onPress: () => console.warn('Cancel Pressed'),
  //     //   style: 'cancel',
  //     // },
  //     {text: 'OK', onPress: () => console.warn('OK Pressed')},
  //   ]);

  const handleSecure = () => {
    if (valueLogin === secure.login && valuePassword === secure.password) {
      navigation.navigate('Screen 3')
      setValueLogin('')
      setValuePassword('')
      setUserLogin()
    } else {
      //createAlert(); // Вызов функции Алерт
      setIsAnimatable(!isAnimatable)
    }
  }

  useEffect(() => {
    setIsFirst(!isFirst)
  }, [])

  useEffect(() => {
    !isFirst && inputRef.current.animate('swing', 800)
  }, [isAnimatable])

  return (
    <>
      <Header title="Log In" />
      <View style={[styles.root, { paddingBottom: keyboard.keyboardShown ? 200 : 0 }]}>
        <Animatable.View style={styles.inputBox} ref={inputRef}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your Login"
            value={valueLogin}
            onChangeText={setValueLogin}
            keyboardType="numeric"
            blurOnSubmit
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your Password"
            value={valuePassword}
            onChangeText={setValuePassword}
            keyboardType="numeric"
            blurOnSubmit
          />
        </Animatable.View>
        <Button handleSecure={handleSecure} title="Submit" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute'
  },

  inputStyle: {
    width: '100%',
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingLeft: 30,
    borderRadius: 20,
    fontSize: 18
  }
})

export default Screen2
