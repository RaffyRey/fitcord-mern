import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { DashBoardHeader } from '../style/header'
<<<<<<< HEAD
import { AddWorkoutButton, LogoutButton, ProfileButton } from '../style/button'
import { FaSignOutAlt, FaUserAlt, FaPlus } from "react-icons/fa"
=======
import { LogoutButton, ProfileButton } from '../style/button'
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa"
>>>>>>> 0ddcdeaa7e0b912f4b4f4288a2c25697aa60e5f6
import Modal from './Modal'
import { ModalLogoutButtonContainer, ModalUserInfoContainer, UserInfoName, UserInfoProfileIcon, UserInfoWorkoutLength } from '../style/modal'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const { user } = useSelector(state => state.auth)

 const onLogout = () => {
  dispatch(logout())
  dispatch(reset())
  navigate('/login')
  // toast message
  toast.success('Successfully logged out')
}

const clicked = () => {
  toast.success('FitCord')
}

  return (
    <DashBoardHeader>
      <span onClick={clicked}></span>
<<<<<<< HEAD
      <main>
        <AddWorkoutButton>
          <FaPlus />
        </AddWorkoutButton>
        <ProfileButton onClick={() => setIsOpen(true)}>
          <FaUserAlt />
          {user && user.firstname}
        </ProfileButton>
      </main>
=======
      <ProfileButton onClick={() => setIsOpen(true)}>
        <FaUserAlt />
        {user && user.firstname}
      </ProfileButton>
>>>>>>> 0ddcdeaa7e0b912f4b4f4288a2c25697aa60e5f6
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalUserInfoContainer>
          <UserInfoProfileIcon>
            <FaUserAlt/>
          </UserInfoProfileIcon>
          <UserInfoName>
            <h1>{user && user.firstname}</h1>
            <h1>{user && user.lastname}</h1>
          </UserInfoName>
          <UserInfoWorkoutLength>
            <h1>Workout/s</h1>
          </UserInfoWorkoutLength>
        </ModalUserInfoContainer>
        <ModalLogoutButtonContainer>
          <LogoutButton onClick={onLogout}>
            <FaSignOutAlt/>
            Logout
          </LogoutButton>
        </ModalLogoutButtonContainer>
      </Modal>
    </DashBoardHeader>
  )
}

export default Header