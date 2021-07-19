import React from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.headerStyle}>
      {title !== 'Contacts' && (
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={styles.headerText}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '200',
  },
  buttonBack: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#00ADD3',
    marginRight: 10,
  },
});

export default Header;
