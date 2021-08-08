// import React, { useState } from 'react'
// import { StyleSheet, Text, View, TouchableOpacity, Platform, UIManager, LayoutAnimation } from 'react-native'

// if (Platform.OS === 'android') {
//   if (UIManager.setLayoutAnimationEnabledExperimental) {
//     UIManager.setLayoutAnimationEnabledExperimental(true)
//   }
// }

// const buttonsArray = ['Sign In', 'Sign Up']

// const Switch = ({ setLoginType }) => {
//   const [active, setActive] = useState(buttonsArray[0])

//   const handleActive = (index, item) => {
//     setActive(index)
//     setLoginType(item)
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
//   }

//   return (
//     <View style={styles.switch}>
//       {buttonsArray.map((item, index) => (
//         <TouchableOpacity onPress={() => handleActive(index, item)}>
//           <Text style={index === active ? styles.switchTextFocus : styles.awitchText}>{item}</Text>
//         </TouchableOpacity>
//     ))}
//     </View>
//   )
// }

// const styles = StyleSheet.create ({
//   switchTextFocus: {
//     fontSize: 18,
//     color: 'orange'
//   },
//   switchText: {
//     fontSize: 13,
//     color: 'grey'
//   },
//   switch: {
//     width: '100%',
//     flexDirection: 'row',
//     paddingHorizontal: 140,
//     paddingTop: 50,
//     justifyContent: 'space-between'
//   }
// })

// export default Switch