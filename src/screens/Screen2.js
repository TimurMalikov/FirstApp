import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Header from '../components/Header';

import {useNavigation} from '@react-navigation/native';
import {useAppState} from '@react-native-community/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const secure = {
  login: '123',
  password: '123',
};

const Screen2 = () => {
  const inputRef = useRef();
  const [isFirst, setIsFirst] = useState(true);
  const [isAnimatable, setIsAnimatable] = useState(false);
  const [valueLogin, setValueLogin] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const [isLogin, setIsLogin] = useState('');
  const currentAppState = useAppState();
  const navigation = useNavigation();

  const storeUserLogin = async value => {
    try {
      await AsyncStorage.setItem('login', String(value));
    } catch (e) {
      console.log(e);
    }
  };

  const getUserLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      if (value !== null) {
        setIsLogin(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  getUserLogin();

  const removeUserLogin = async () => {
    try {
      await AsyncStorage.removeItem('login');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (currentAppState) {
      removeUserLogin();
    } else {
      console.log('error');
    }
  });

  console.log('currentAppState', currentAppState);

  console.log('isLogin:::', isLogin);

  const handleSecure = () => {
    if (valueLogin === secure.login && valuePassword === secure.password) {
      storeUserLogin(1);
      navigation.navigate('Screen 3');
    } else {
      setIsAnimatable(!isAnimatable);
    }
  };

  useEffect(() => {
    setIsFirst(!isFirst);
  }, []);

  useEffect(() => {
    !isFirst && inputRef.current.animate('swing', 800);
  }, [isAnimatable]);

  return (
    <>
      <Header title="Log In" />
      <View style={styles.root}>
        <Animatable.View style={styles.inputBox} ref={inputRef}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Login"
            value={valueLogin}
            onChangeText={setValueLogin}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Password"
            value={valuePassword}
            onChangeText={setValuePassword}
          />
        </Animatable.View>
        <Button handleSecure={handleSecure} title="Submit" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },

  inputStyle: {
    width: '100%',
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingLeft: 30,
    borderRadius: 20,
    fontSize: 18,
  },
});

export default Screen2;
