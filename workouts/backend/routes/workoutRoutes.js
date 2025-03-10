import express from 'express';
const router = express.Router();
// Alle workouts ophalen
router.get('/', (req, res) => {
res.json({ msg: 'Alle workouts ophalen' });
});
// Een specifieke workout ophalen
router.get('/:id', (req, res) => {
res.json({ msg: `Workout met id ${req.params.id} ophalen` });
});
// Nieuwe workout toevoegen
router.post('/', (req, res) => {
res.json({ msg: 'Nieuwe workout toegevoegd' });
});
export default router;