import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const registerUser = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user.updateProfile({ displayName: name });
      })
      .catch((error) => {
        console.error('Error registrando el usuario:', error);
      });
  };

  return (
    <View>
      <Text>Registro</Text>
      <TextInput placeholder="Nombre" onChangeText={setName} value={name} />
      <TextInput placeholder="Correo" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Contraseña" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Registrar" onPress={registerUser} />
    </View>
  );
}
