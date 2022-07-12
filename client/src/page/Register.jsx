import React, { useState, useEffect} from 'react'
import Input from '../components/Input'
import { Form, PageContent } from '../style/container'
import { FormHeader } from '../style/header'
import { useNavigate, Link } from 'react-router-dom'
import FormButton from '../components/FormButton'

// reducer
import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'

import Loading from '../components/Loading'
import {toast} from 'react-toastify'



const Register = () => {
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmpassword: '',
  })

  const { lastname, firstname, email, password, confirmpassword } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      toast.success('Successfully registered')
      navigate('/')
    }

    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const isOnChange = (e) => {
    setFormData((prevstate) =>({
      ...prevstate,
      [e.target.name]: e.target.value
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== confirmpassword){
      toast.error('Password does not match')
    } else {
      const userData = {
        lastname,
        firstname,
        email,
        password
      }
      dispatch(register(userData))
    }
  }

  if(isLoading) return <Loading/>


  return (
    <PageContent>
      <Form onSubmit={onSubmit}>
        <FormHeader>
          <span></span>
        </FormHeader>
        <Input placeholder='Last name' type='text' label='Last name' value={lastname} name='lastname'  onchange={isOnChange}/>
        <Input 
          placeholder='First name' 
          type='text' 
          label='First name' 
          value={firstname} 
          name='firstname'  
          onchange={isOnChange}
        />
        <Input placeholder='Email' type='email' label='Email' value={email} name='email'  onchange={isOnChange}/>
        <Input placeholder='Password' type='password' label='Password' value={password} name='password'  onchange={isOnChange}/>
        <Input placeholder='Confirm password' type='password' label='Confirm password' value={confirmpassword} name='confirmpassword'  onchange={isOnChange}/>
        <span>Already have an account? <Link to='/login'>Login</Link></span>
        <FormButton type='submit' label='Submit'/>
      </Form>
    </PageContent>
  )
}

export default Register