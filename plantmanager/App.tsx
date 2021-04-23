//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading'
//import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [fonstLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fonstLoaded)
    return <AppLoading />

  return (
    <Routes />
  )

}

/*
export default function App() {
  return (
    <View style={styles.container}>

      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/