// routes/items.js
import express from 'express';
const router = express.Router();
import db from '../firebase.js';

const COLLECTION_NAME = 'Users'; // Nombre de tu colección en Firestore

// Obtener todos los items
router.get('/', async (req, res) => {
  try {
    const snapshot = await db.collection(COLLECTION_NAME).get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los items' });
  }
});

// Obtener un item por ID
router.get('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const doc = await db.collection(COLLECTION_NAME).doc(itemId).get();
        if (!doc.exists) {
            return res.status(404).json({ error: 'Item no encontrado' });
        }
        res.json({ id: doc.id, ...doc.data() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el item' });
    }
});

// Crear un nuevo item
router.post('/', async (req, res) => {
  try {
    const newItem = req.body;
    const docRef = await db.collection(COLLECTION_NAME).add(newItem);
    res.status(201).json({ id: docRef.id, message: 'Item creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el item' });
  }
});

// Actualizar un item
router.put('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const updatedItem = req.body;
        await db.collection(COLLECTION_NAME).doc(itemId).update(updatedItem);
        res.json({ message: 'Item actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el item' });
    }
});


// Eliminar un item
router.delete('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        await db.collection(COLLECTION_NAME).doc(itemId).delete();
        res.json({ message: 'Item eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el item' });
    }
});

export default router;