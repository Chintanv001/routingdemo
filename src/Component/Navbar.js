import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbardiv">
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && 'red',
          }
        }}
        to="/"
      >
        <h1>Home</h1>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && 'red',
          }
        }}
        to="/about"
      >
        <h1>About</h1>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && 'red',
          }
        }}
        to="/contact"
      >
        <h1>Contact-us</h1>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && 'red',
          }
        }}
        to="/user"
      >
        <h1>Users</h1>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && 'red',
          }
        }}
        to="/userdetails"
      >
        <h1>Users details</h1>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && 'red',
          }
        }}
        to="/admin"
      >
        <h1>Admin</h1>
      </NavLink>
    </div>
  )
}

export default Navbar
