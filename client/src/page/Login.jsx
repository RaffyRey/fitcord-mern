import React, { useState, useEffect} from 'react'
import Input from '../components/Input'
import { Form, PageContent } from '../style/container'
import { FormHeader } from '../style/header'
import { useNavigate, Link } from 'react-router-dom'
import FormButton from '../components/FormButton'

// reducer
import {useSelector, useDispatch} from 'react-redux'
import {login, reset} from '../features/auth/authSlice'

import Loading from '../components/Loading'
import {toast} from 'react-toastify'


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const isOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    const userData ={
      email,
      password
    }

    dispatch(login(userData))
  }

  if(isLoading) return <Loading/>

  return (
    // this is the login form
    <PageContent>
      <Form onSubmit={onSubmit}>
        <FormHeader/>
        <Input placeholder='Email' type='email' label='Email' value={email} name='email'  onchange={isOnChange}/>
        <Input placeholder='Password' type='password' label='Password' value={password} name='password'  onchange={isOnChange}/>
        <span>Don't have an account? <Link to='/register'>Register</Link></span>
        <FormButton label='Login'/>
      </Form>
    </PageContent>
  )
}

export default Login