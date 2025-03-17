import express from 'express';
import Workout from '../models/Workout.js';
const router = express.Router();
// Alle workouts ophalen
router.get('/', (req, res) => {
res.json({ msg: 'Alle workouts ophalen, werkt' });
});
// Een specifieke workout ophalen
router.get('/:id', (req, res) => {
res.json({ msg: `Workout met id ${req.params.id} ophalen` });
});
// Nieuwe workout toevoegen
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;
    try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
    });
export default router;