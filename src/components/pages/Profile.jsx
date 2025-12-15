import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'

export const Profile = () => {
  const { user } = useContext(userContext)

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
      
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg text-center">
        
        <h2 className="text-2xl font-semibold text-white mb-4">
          Profile
        </h2>

        <p className="text-slate-300 text-lg">
          Hello and Welcome
        </p>

        <p className="text-indigo-400 text-xl font-medium mt-2">
          {user.userName}
        </p>

      </div>
    </div>
  )
}
