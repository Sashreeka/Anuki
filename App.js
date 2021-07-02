import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Shashrika app eka</Text>
      <Text>This is the first react APP</Text>
        <View style={styles.container2}>
        <Text>Shashrika app eka</Text>
        <Text>Oya hariyata wada karanawada please</Text>
      </View>
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
  container2: {
    backgroundColor: '#eee',
    fontFamily:"Roboto-BoldItalic",
    fontSize:40,
  },
});
