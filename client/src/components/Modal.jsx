import React from 'react'
import ReactDom from 'react-dom'
import { ModalOvelay, UserModal } from '../style/modal'
import { FaTimes } from 'react-icons/fa'
import { CloseModal } from '../style/button'

export default function Modal({children, open, onClose}) {
 if(!open) return null

  return ReactDom.createPortal(
   <>
    <ModalOvelay/>
    <UserModal>
     <header>
      <CloseModal onClick={onClose}>
       <FaTimes/>
      </CloseModal>
     </header>
     {children}
    </UserModal>
   </>,
   document.getElementById('modal')
  )
}
