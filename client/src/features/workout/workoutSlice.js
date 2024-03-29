import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import workoutService from './workoutService';

// initial state
const initialState = {
  workouts: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: ''
}

// create workout
export const createWorkouts = createAsyncThunk('workout/create', async (workoutData, thunkAPI) => {
 try {
  const token = thunkAPI.getState().auth.user.token;
  return await workoutService.createWorkout(workoutData, token);
 } catch (error) {
  const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

  return thunkAPI.rejectWithValue(message)
 }
})

 // get user workouts (for dashboard)
 export const getWorkouts = createAsyncThunk('workout/getAll', async (_, thunkAPI) => {
  try {
   const token = thunkAPI.getState().auth.user.token;
   return await workoutService.getAllWorkouts(token);
  } catch (error) {
   const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

   return thunkAPI.rejectWithValue(message)
  }
 })


 // delete workout 
 export const deleteWorkout = createAsyncThunk('workout/delete', async (workoutId, thunkAPI) => {
  try {
   const token = thunkAPI.getState().auth.user.token;
   return await workoutService.deleteWorkout(workoutId, token);
  } catch (error) {
   const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

   return thunkAPI.rejectWithValue(message)
  }
 })


 // create workout slice
export const workoutSlice = createSlice({
 name: 'workout',
 initialState,
 reducers: {
  reset: (state) => initialState
 },
 extraReducers: (builder) => {
  builder
   .addCase(createWorkouts.pending, (state) => {
   state.isLoading = true
  })
  .addCase(createWorkouts.fulfilled, (state, action) => {
   state.isLoading = false
   state.isSuccess = true
   state.workouts.push(action.payload)
  })
  .addCase(createWorkouts.rejected, (state, action) => {
   state.isLoading = false
   state.isError = true
   state.message = action.payload
  })
  .addCase(getWorkouts.pending, (state) => {
   state.isLoading = true
  })
  .addCase(getWorkouts.fulfilled, (state, action) => {
   state.isLoading = false
   state.isSuccess = true
   state.workouts = action.payload
  })
  .addCase(getWorkouts.rejected, (state, action) => {
   state.isLoading = false
   state.isError = true
   state.message = action.payload
  })
  .addCase(deleteWorkout.pending, state => {
   state.isLoading = true
  })
  .addCase(deleteWorkout.fulfilled, (state, action) => {
   state.isLoading = false
   state.isSuccess = true
   state.workouts = state.workouts.filter(workout => workout._id !== action.payload.id)
  })
  .addCase(deleteWorkout.rejected, (state, action) => {
   state.isLoading = false
   state.isError = true
   state.message = action.payload
  })
 }
})



export const { reset } = workoutSlice.actions
export default workoutSlice.reducer