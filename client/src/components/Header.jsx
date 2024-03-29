import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { DashBoardHeader } from '../style/header'
import { AddWorkoutButton, LogoutButton, ProfileButton } from '../style/button'
import { FaSignOutAlt, FaUserAlt, FaPlus } from "react-icons/fa"
import Modal from './Modal'
import { ModalLogoutButtonContainer, ModalUserInfoContainer, UserInfoName, UserInfoProfileIcon, UserInfoWorkoutLength } from '../style/modal'
import WorkoutModal from './WorkoutModal'

const Header = () => {
  const [openProfileModal, setOpenProfileModal] = useState(false)
  const [openWorkoutModal, setOpenWorkoutModal] = useState(false)
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
      <main>
        <AddWorkoutButton onClick={() => setOpenWorkoutModal(true)}>
          <FaPlus />
        </AddWorkoutButton>
        <ProfileButton onClick={() => setOpenProfileModal(true)}>
          <FaUserAlt />
          {user && user.firstname}
        </ProfileButton>
      </main>
      <Modal open={openProfileModal} onClose={() => setOpenProfileModal(false)}>
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
      {/* workout modal */}
      <WorkoutModal open={openWorkoutModal} close={() => setOpenWorkoutModal(false)}/>
    </DashBoardHeader>
  )
}

export default Header