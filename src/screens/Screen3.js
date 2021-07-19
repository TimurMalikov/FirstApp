import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header';
import {useAppState} from '@react-native-community/hooks';
import {useNavigation} from '@react-navigation/core';

const Screen3 = () => {
  const navigation = useNavigation();
  const currentAppState = useAppState();

  console.log(useAppState);

  useEffect(() => {
    if (currentAppState) {
      navigation.navigate('Screen 2');
    }
  });

  return (
    <SafeAreaView>
      <Header title="Gallery" />
    </SafeAreaView>
  );
};

export default Screen3;
