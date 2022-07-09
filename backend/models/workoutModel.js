const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  user: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'User',
   required: true
  },
 title: {
  type: String,
  required: [true, 'Title is required']
 },
 load: {
  type: Number,
  required: [true, 'Load is required']
 },
 reps: {
  type: Number,
  required: [true, 'Reps is required']
 }
}, {timestamps: true});

module.exports = mongoose.model('Workout', workoutSchema);