import React, { useEffect } from 'react'
import { PageContent } from '../style/container'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'



const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {user} = useSelector(state => state.auth)
  
  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <PageContent>
      <Header/>
      <h1>{user && user.firstname}</h1>
    </PageContent>
  )
}

export default Dashboard