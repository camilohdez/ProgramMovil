import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const db = getFirestore();

const usarListas = () => {
  const [listas, setListas] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "listas"), (snapshot) => {
      const listas = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setListas(listas);
    });

    return unsubscribe; // Desuscribirse al desmontar
  }, []);

  return listas;
};
