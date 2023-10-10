import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Dashboard() {
  const [purchasedProducts, setPurchasedProducts] = useState([
    { id: '1', name: 'Producto 1', price: 10 },
    // ... puedes añadir más productos comprados aquí
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos Comprados</Text>
      <FlatList
        data={purchasedProducts}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
