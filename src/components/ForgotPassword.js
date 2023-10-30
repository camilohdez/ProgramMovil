import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../firebaseConfig.js'; // Asegúrate de reemplazar con la ruta correcta

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const auth = getAuth(app);

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Correo de recuperación enviado.');
      })
      .catch((error) => {
        console.error('Error enviando correo de recuperación:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Correo" 
        onChangeText={setEmail} 
        value={email} 
      />

      <TouchableOpacity style={styles.button} onPress={resetPassword}>
        <Text style={styles.buttonText}>Recuperar Contraseña</Text>
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
