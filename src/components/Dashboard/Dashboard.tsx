import React, { FC } from 'react'
import useLogin from '../../hooks/useLogin'
import { Redirect } from 'react-router'

export const Dashboard: FC = () => {
  const { user, logout } = useLogin()

  if (!user) {
    console.log('Redirect to="/login"')
    return (<Redirect to="/login"/>)
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>

  )
}
