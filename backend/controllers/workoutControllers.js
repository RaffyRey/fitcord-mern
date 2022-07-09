const asyncHandler = require('express-async-handler');

// import workout model
const Workout = require('../models/workoutModel')
const User = require('../models/userModel')

// get all user workouts
const getWorkout = asyncHandler(async (req, res, next) => {
  const workout = await Workout.find({user: req.user.id})
  res.status(200).json(workout)
})

// set workout
const setWorkout = asyncHandler(async (req, res, next) => {
  const {title, load, reps} = req.body

 // if no title or load or reps, return error
 if(!title || !load || !reps) {
  res.status(400)
  throw new Error('Please provide a Title, Load, and Reps')
 }

 const workout = await Workout.create({
  user: req.user.id,
  title,
  load,
  reps,
 })
 res.status(201).json(workout)
})

// delete workout
const deleteWorkout = asyncHandler(async (req, res, next) => {
 const workout = await Workout.findById(req.params.id)

 // check if workout exists
 if(!workout) {
  res.status(404)
  throw new Error('Workout not found')
 }

 // check for user
 if(!req.user){
  res.status(404)
  throw new Error('User is not found')
 }

 // make sure user id matches workout user id
 if(workout.user.toString() !== req.user.id){
  res.status(401)
  throw new Error('Not authorized')
 }

 // if all checks pass, delete workout
 await workout.remove()
 res.status(200).json({id: req.params.id})
})

// update workout
const updateWorkout = asyncHandler(async (req, res, next) => {
 const workout = await Workout.findById(req.params.id)

 // check if workout exists
 if(!workout) {
  res.status(404)
  throw new Error('Workout not found')
 }

 // check for user
 if(!req.user){
  res.status(404)
  throw new Error('User is not found')
 }

 // make sure user id matches workout user id
 if(workout.user.toString() !== req.user.id){
  res.status(401)
  throw new Error('Not authorized')
 }

 // if all checks pass, update workout
 const updateWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body,{
  new: true,
 })

 res.status(200).json(updateWorkout)
})

module.exports = {
  getWorkout,
  setWorkout,
  deleteWorkout,
  updateWorkout
}