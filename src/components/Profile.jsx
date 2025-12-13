import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export const Profile = () => {
  const { user } = useContext(UserContext)

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="bg-slate-800 text-white px-6 py-4 rounded-xl shadow-lg">
          Please Login
        </div>
      </div>
    )

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-white mb-2">
          Profile
        </h1>
        <p className="text-lg text-slate-300">
          Welcome, <span className="text-blue-400 font-medium">{user.username}</span>
        </p>
      </div>
    </div>
  )
}
