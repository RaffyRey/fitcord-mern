import React from 'react'
import Input from '../components/Input'
import { Form, PageContent } from '../style/container'
import { FormHeader } from '../style/header'
import { useNavigate, Link } from 'react-router-dom'
import FormButton from '../components/FormButton'


const Login = () => {
  return (
    // this is the login form
    <PageContent>
      <Form>
        <FormHeader/>
        <Input placeholder='Email' type='email' label='Email'/>
        <Input placeholder='Password' type='password' label='Password'/>
        <span>Don't have an account? <Link to='/register'>Register</Link></span>
        <FormButton label='Login'/>
      </Form>
    </PageContent>
  )
}

export default Login