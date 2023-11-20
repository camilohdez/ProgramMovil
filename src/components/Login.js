import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig.js';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario inició sesión exitosamente:', userCredential.user);
        navigation.navigate('Home'); // Redirige a la pantalla Home
      })
      .catch((error) => {
        console.error('Error iniciando sesión:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.greeting}>Hello Again</Text>
      <Text style={styles.subGreeting}>Log into your account</Text>
      
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/images/icons/mail_FILL0_wght400_GRAD0_opsz24.png')} style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="Correo" 
          onChangeText={setEmail} 
          value={email} 
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/images/icons/lock_FILL0_wght400_GRAD0_opsz24.png')} style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña" 
          onChangeText={setPassword} 
          value={password} 
          secureTextEntry 
        />
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={loginUser}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Registrarse</Text>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    marginBottom: 5,
    color: '#333',
  },
  subGreeting: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    margin: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#FFA500',
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
  registerText: {
    color: '#FFA500',
    marginTop: 15,
  },
});
