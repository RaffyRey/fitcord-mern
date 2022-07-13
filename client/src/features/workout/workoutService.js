import axios from 'axios';

const API_URL = '/api/workout/';


// create workout
const createWorkout = async (workoutData, token) => {

 // config for user token
 const config = {
  headers: {
   Authorization: `Bearer ${token}`,
  }
 }

 // send post request to server
 const response = await axios.post(API_URL, workoutData, config);

 // return response
 return response.data;
}

//  get all user workouts (for dashboard)
const getAllWorkouts = async (token) => {
 // config for user token
 const config = {
  headers: {
   Authorization: `Bearer ${token}`,
  }
 }

 // send get request to server
 const response = await axios.get(API_URL, config);

 // return response
 return response.data;
}

// workout delete
const deleteWorkout = async (workoutId, token) => {
 // config for user token
 const config = {
  headers: {
   Authorization: `Bearer ${token}`,
  }
 }

 // send delete request to server
 const response = await axios.delete(API_URL + workoutId, config);

 // return response
 return response.data;
}


const workoutService = {
 createWorkout,
 getAllWorkouts,
 deleteWorkout
}

export default workoutService;