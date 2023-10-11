import './App.css'
import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Users from './Pages/Users/Users'
import User1 from './Pages/Users/User1'
import User2 from './Pages/Users/User2'
import User3 from './Pages/Users/User3'
import UserDetails from './Pages/UserDetails/UserDetails'
import Admin from './Pages/Admin/Admin'
import ProtectedRoute from './Component/ProtectedRoute'

function App() {
  const [isAdmin] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/user" element={<Users />}>
          <Route path="user1" element={<User1 />} />
          <Route path="user2" element={<User2 />} />
          <Route path="user3" element={<User3 />} />
        </Route>
        <Route path="userdetails/:userId" element={<UserDetails />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAdmin={isAdmin}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}
export default App
