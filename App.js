import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import app from './firebaseConfig'; // Si exportaste app
import firebase from 'firebase/app'; // Importa el core de Firebase
import 'firebase/auth'; // Importa el servicio de autenticación de Firebase
import 'firebase/firestore'; // Importa el servicio de base de datos Firestore de Firebase

import Register from './src/components/Register'; // Asegúrate de que la ruta sea correcta
import Login from './src/components/Login'; // Asegúrate de que la ruta sea correcta
import ForgotPassword from './src/components/ForgotPassword'; // Asegúrate de que la ruta sea correcta

export default function App() {
  const [view, setView] = useState('login'); // Puedes cambiar el valor inicial según lo que quieras mostrar primero

  const renderView = () => {
    switch (view) {
      case 'register':
        return <Register />;
      case 'login':
        return <Login />;
      case 'forgotPassword':
        return <ForgotPassword />;
      default:
        return <Login />;
    }
  };

  return (
    <View style={styles.container}>
      {renderView()}
      <Button title="Ir a Registro" onPress={() => setView('register')} />
      <Button title="Ir a Inicio de Sesión" onPress={() => setView('login')} />
      <Button title="Olvidé mi Contraseña" onPress={() => setView('forgotPassword')} />
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

