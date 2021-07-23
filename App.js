import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes'; 
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import GlobalStyle from './src/styles/GlobalStyle';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark'/>
      <SafeAreaView style={GlobalStyle.droidSafeArea}>
          <Routes/>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
