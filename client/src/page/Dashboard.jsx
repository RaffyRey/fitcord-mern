import React, { useEffect } from 'react'
import { DashboardContent, PageContent } from '../style/container'
import {  WorkoutDeleteButton, WorkoutItem, WorkoutItemContainer } from '../style/workoutItem'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'
import { deleteWorkout, getWorkouts, reset } from '../features/workout/workoutSlice'
import { FaTrash } from 'react-icons/fa'

// import date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'



const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {user} = useSelector(state => state.auth)
  const {workouts, isLoading, isError, message} = useSelector(state => state.workout)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(!user){
      navigate('/login')
    }

    dispatch(getWorkouts())

    return () => dispatch(reset())

  }, [dispatch, navigate])

  if(isLoading) return <Loading/>

  return (
    <PageContent>
      <Header/>
      <DashboardContent>
        {workouts.length > 0 ? (
            <WorkoutItemContainer>
              {workouts.map((workout) => (
                <WorkoutItem key={workout._id}>
                  <WorkoutDeleteButton>
                    <FaTrash onClick={() => dispatch(deleteWorkout(workout._id))}/>
                  </WorkoutDeleteButton>
                  <h3>{workout.title}</h3>
                  <p>{workout.load}</p>
                  <p>{workout.reps}</p>
                  <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
                </WorkoutItem>
              ))}
            </WorkoutItemContainer>
          ) : (<h3>You have not set any workout</h3>)}
      </DashboardContent>
    </PageContent>
  )
}

export default Dashboard