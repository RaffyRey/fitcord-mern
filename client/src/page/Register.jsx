import React from 'react'
import Input from '../components/Input'
import { Form, PageContent } from '../style/container'
import { FormHeader } from '../style/header'
import { useNavigate, Link } from 'react-router-dom'
import FormButton from '../components/FormButton'


const Register = () => {
  return (
    <PageContent>
      <Form>
        <FormHeader/>
        <Input placeholder='First name' type='text' label='First name'/>
        <Input placeholder='Last name' type='text' label='Last name'/>
        <Input placeholder='Email' type='email' label='Email'/>
        <Input placeholder='Password' type='password' label='Password'/>
        <span>Already have an account? <Link to='/login'>Register</Link></span>
        <FormButton label='Login'/>
      </Form>
    </PageContent>
  )
}

export default Register