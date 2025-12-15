import React, { useContext, useState } from 'react'
import { userContext } from '../context/UserContext'

export const Login = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(userContext)

    const handleLogin =()=>{
        setUser({
            userName: userName,
            email: email,
            password: password
        })
    }



  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      
      <div className="w-full max-w-sm bg-slate-800 p-8 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Login
        </h2>

       
        <div className="mb-4">
          <label className="block text-slate-300 text-sm mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-slate-300 text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

       
        <div className="mb-6">
          <label className="block text-slate-300 text-sm mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        
        <button onClick={handleLogin} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">
          Login
        </button>

      </div>
    </div>
  )
}
