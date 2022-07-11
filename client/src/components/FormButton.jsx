import React from 'react'
import { ButtonForm } from '../style/button'

const FormButton = ({label, type}) => {
  return (
    <ButtonForm type={type}>{label}</ButtonForm>
  )
}

export default FormButton