import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
//import {useNavigation} from '@react-navigation/native';

const screenStrings = ['Screen 1', 'Screen 2'];

const Tabbar = ({navigation, state}) => {
  if (state.index === 1 || state.index === 2)
  return null;
  // const navigation = useNavigation();
  return (
    <View style={styles.tabStyle}>
      {screenStrings.map((item, index) => (
        <TouchableOpacity
          style={styles.buttonTabStyle}
          onPress={() => navigation.navigate(item)}>
          <Text style={styles.tabText}>{item.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    marginBottom: 10,
    backgroundColor: '#0A0A0A',
    borderRadius: 20,
    width: '70%',
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tabText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonTabStyle: {
    flex: 1,
  },
});

export default Tabbar;
