import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import colors from '../styles/colors';
import userImg from '../assets/girl-face.png';
import fonts from '../styles/fonts';

export function Header() {

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.greeting}> Olá, {'\n'} </Text>
        <Text style={styles.userName}> Eliza </Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 10,

  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  }
});

