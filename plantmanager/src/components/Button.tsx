import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';

export function Button() {

}

const styles = StyleSheet.create({
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

});