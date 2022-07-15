import React from 'react'
import ReactDom from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import { CloseModal } from '../style/button'
import { ModalOverlay, WorkoutModalContainer } from '../style/modal'

const WorkoutModal = ({open, close}) => {
 if(!open) return null

  return ReactDom.createPortal(
   <>
   <ModalOverlay/>
    <WorkoutModalContainer>
    <header>
      <CloseModal onClick={close}>
       <FaTimes/>
      </CloseModal>
    </header>
    </WorkoutModalContainer>
   </>,
    document.getElementById('workoutModal')
  )
}

export default WorkoutModal