import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

const Preloader = () => {
  return (
    <ActivityIndicator
      size="large"
      color="#00ADD3"
      style={styles.indicatorStyle}
    />
  )
}

const styles = StyleSheet.create({
  indicatorStyle: {
    flex: 1
  }
})

export default Preloader
