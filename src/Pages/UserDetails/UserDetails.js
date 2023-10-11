import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
  const navigate = useNavigate()
  const [num, setNum] = useState(0)
  const { userId } = useParams()
  const getUserDetails = () => {
    navigate(`/userdetails/${num}`)
  }
  return (
    <div>
      <h1>Enter your userid</h1>
      <input
        type="number"
        placeholder="Enter your userid"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={getUserDetails}>Get Details</button>
      <h1>your userid is {userId}</h1>
    </div>
  )
}

export default UserDetails
