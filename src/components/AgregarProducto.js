import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore';

export default function AgregarProducto({ route, navigation }) {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const db = getFirestore();
  const { listaId } = route.params;

  const guardarProducto = async () => {
    try {
      const listaRef = doc(db, "listas", listaId);
      await updateDoc(listaRef, {
        productos: arrayUnion({ nombre: nombreProducto, precio: precio }),
      });
      navigation.goBack();
    } catch (error) {
      console.error("Error al agregar producto: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Producto"
        value={nombreProducto}
        onChangeText={setNombreProducto}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
      />
      <Button title="Agregar Producto" onPress={guardarProducto} />
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
