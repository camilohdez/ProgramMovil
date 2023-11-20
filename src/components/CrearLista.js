import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function CrearLista({ navigation }) {
  const [nombreLista, setNombreLista] = useState('');
  const db = getFirestore();

  const guardarLista = async () => {
    try {
      await addDoc(collection(db, "listas"), {
        nombre: nombreLista,
        productos: [],
      });
      navigation.goBack();
    } catch (error) {
      console.error("Error al guardar la lista: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la Lista"
        value={nombreLista}
        onChangeText={setNombreLista}
      />
      <Button title="Guardar Lista" onPress={guardarLista} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});
