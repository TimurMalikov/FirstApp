import React from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text
} from 'react-native'
import RoundedButton from './RoundedButton'

const ModalContact = ({ handleCardOpen, currentUser }) => (
  <>
    <SafeAreaView style={styles.modalHeader}>
      <RoundedButton type="Close" handlePress={handleCardOpen} />
    </SafeAreaView>
    <View style={styles.modalTextBox}>
      <Text style={styles.modalTitle}>{currentUser?.name?.first}</Text>
      <Text style={styles.modalDescription}>{currentUser?.phone}</Text>
    </View>
    <View />
  </>
)

const styles = StyleSheet.create({
  modalHeader: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    marginRight: 30
  }, 
  modalTitle: {
    fontSize: 32,
    fontWeight: '400',
    color: 'black'
  },
  modalDescription: {
    fontSize: 20,
    fontWeight: '300',
    color: 'black'
  },
  modalTextBox: {
    alignItems: 'center'
  }
})

export default ModalContact
