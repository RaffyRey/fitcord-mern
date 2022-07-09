const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');
const { getWorkout, setWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutControllers');

router.route('/').get(protect, getWorkout).post(protect, setWorkout)
router.route('/:id').delete(protect, deleteWorkout).put(protect, updateWorkout)

module.exports = router;