import React, { useEffect } from 'react'
import { DashboardContent, PageContent } from '../style/container'
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
      <DashboardContent>
        <h1>Dashboard</h1>
      </DashboardContent>
    </PageContent>
  )
}

export default Dashboard