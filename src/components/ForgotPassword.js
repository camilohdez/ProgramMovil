import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const resetPassword = () => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        console.log('Correo de recuperación enviado.');
      })
      .catch((error) => {
        console.error('Error enviando correo de recuperación:', error);
      });
  };

  return (
    <View>
      <Text>Recuperar Contraseña</Text>
      <TextInput placeholder="Correo" onChangeText={setEmail} value={email} />
      <Button title="Recuperar Contraseña" onPress={resetPassword} />
    </View>
  );
}
