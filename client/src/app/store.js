import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import workoutSlice from '../features/workout/workoutSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    workout: workoutSlice,
  },
});
