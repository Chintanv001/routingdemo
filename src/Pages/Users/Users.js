import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div>
      <h1>Welcome to users page</h1>
      <div>
        <Link to="/user/user1">
          <h1>User 1</h1>
        </Link>
        <Link to="/user/user2">
          <h1>User 2</h1>
        </Link>
        <Link to="/user/user3">
          <h1>User 3</h1>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Users
