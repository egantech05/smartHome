import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';

import NavBar from "./src/components/NavBar";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
    
          <NavBar />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    padding: 16,
  },
});
