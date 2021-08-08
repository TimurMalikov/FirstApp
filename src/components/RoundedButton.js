import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import arrowIcon from '../assets/arrowIcon.png'
import buttonClose from '../assets/buttonClose.png'
import { useLogin } from '../context'

const RoundedButton = ({ type, handlePress, color }) => {
  const navigation = useNavigation()
  const { isLogin } = useLogin()

  const handleNavigate = () => {
    if (handlePress) {
      handlePress()
    }
    if (isLogin) {
      navigation.navigate('Screen 1')
    }
    if (!isLogin && !handlePress) {
      navigation.goBack()
    }
  }

  return (
    <TouchableOpacity
      style={[styles.backButton, { backgroundColor: color }]}
      onPress={handleNavigate}
    >
      <Image
        style={[styles.arrowIcon, { tintColor: color === '#00ADD3' ? 'white' : '#202020' }]} 
        source={type === 'close' ? buttonClose : arrowIcon}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrowIco: {
    width: 15,
    height: 15
  }
})

export default RoundedButton
