import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children, isAdmin }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin) {
      alert('You are not an admin')
      navigate('/')
    }
  }, [isAdmin, navigate])

  return isAdmin ? children : null
}

export default ProtectedRoute
