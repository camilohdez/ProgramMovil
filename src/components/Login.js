import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Usuario inició sesión exitosamente:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error iniciando sesión:', error);
      });
  };

  return (
    <View>
      <Text>Iniciar Sesión</Text>
      <TextInput placeholder="Correo" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Contraseña" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Iniciar Sesión" onPress={loginUser} />
    </View>
  );
}
