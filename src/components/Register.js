import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig.js'; // Asegúrate de reemplazar con la ruta correcta

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const auth = getAuth(app);

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario registrado:', user);
        // Aquí puedes actualizar el perfil del usuario si es necesario
      })
      .catch((error) => {
        console.error('Error registrando el usuario:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Nombre" 
        onChangeText={setName} 
        value={name} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Correo" 
        onChangeText={setEmail} 
        value={email} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        onChangeText={setPassword} 
        value={password} 
        secureTextEntry 
      />

      <TouchableOpacity style={styles.button} onPress={registerUser}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

