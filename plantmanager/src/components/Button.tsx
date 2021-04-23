import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Button() {

  return (
    <TouchableOpacity style={styles.container} >
      <Text style={styles.text} >
        Confirmar
      </Text>
    </TouchableOpacity>
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  },
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  /*
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
    height: 56,
    width: 120
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
*/
});