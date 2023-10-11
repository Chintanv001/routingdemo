import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/')
  }
  return (
    <div>
      <h1>You are on contact page</h1>
      <button onClick={navigateToHome}>Back to Home page</button>
    </div>
  )
}

export default Contact
