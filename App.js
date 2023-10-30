import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation'; // Asegúrate de que la ruta sea correcta
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
