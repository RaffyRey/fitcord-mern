import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { useDispatch } from 'react-redux'
import { createWorkouts } from '../features/workout/workoutSlice'
import { FaTimes } from 'react-icons/fa'
import { CloseModal, SubmitWorkout } from '../style/button'
import { AddWorkoutForm, ModalOverlay, WorkoutModalContainer } from '../style/modal'
import Input from './Input'
import {toast} from 'react-toastify'

const WorkoutModal = ({open, close}) => {
  const [formData, setFormData] = useState({
    title: '',
    load: '',
    reps: ''
  })

  const {title, load, reps} = formData


  const dispatch = useDispatch()

  const isOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if(title === '' || load === '' || reps === ''){
      toast.error('Please fill out all fields')
    } else{
      dispatch(createWorkouts(formData))
    }
  
  }

  if(!open) return null

  return ReactDom.createPortal(
    <>
    <ModalOverlay/>
      <WorkoutModalContainer>
        <header>
          <CloseModal onClick={close}>
            <FaTimes/>
          </CloseModal>
        </header>
        <h1>Add Workout</h1>
        <AddWorkoutForm onSubmit={onSubmit}>
          <Input type="text" label="Title" name="title" placeholder="Title" onchange={isOnChange} value={title}/>
          <Input type="text" label='Weight' name="load" placeholder="Load" onchange={isOnChange} value={load}/>
          <Input type="text" label="Reps" name="reps" placeholder="Reps" onchange={isOnChange} value={reps}/>
          <SubmitWorkout type='submit'>Add Workout</SubmitWorkout>
        </AddWorkoutForm>
      </WorkoutModalContainer>
    </>,
    document.getElementById('workoutModal')
  )
}

export default WorkoutModal