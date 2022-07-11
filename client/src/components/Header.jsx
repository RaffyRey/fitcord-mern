import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import { toast } from 'react-toastify'

const Header = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch()
 // const { user } = useSelector(state => state.auth)

 const onLogout = () => {
  dispatch(logout())
  dispatch(reset())
  navigate('/login')
  // toast message
  toast.success('Successfully logged out')
}
  return (
    <div>
     <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Header