import React, {useId} from 'react'
import { FormInputContainer } from '../style/input'

const Input = ({placeholder, label, type, onchange, value, name}) => {
 const id = useId()
  return (
   <FormInputContainer>
    <input type={type} placeholder={placeholder} id={id} onChange={onchange} value={value} name={name}/>
    <label htmlFor={id}>{label}</label>
   </FormInputContainer>
  )
}

export default Input