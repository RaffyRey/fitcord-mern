import React, {useId} from 'react'
import { FormInputContainer } from '../style/input'

const Input = ({placeholder, label, type}) => {
 const id = useId()
  return (
   <FormInputContainer>
    <input type={type} placeholder={placeholder} id={id}/>
    <label htmlFor={id}>{label}</label>
   </FormInputContainer>
  )
}

export default Input