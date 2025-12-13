import { React, useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const { setUser } = useContext(UserContext)

const handleSubmit = (e) => {
  e.preventDefault()
  setUser({
    username: userName,
    email: email,
    password: password
  })
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-sm bg-slate-800 p-6 rounded-xl shadow-lg">
        
        <h1 className="text-2xl font-semibold text-center text-white mb-6">
          Login
        </h1>

        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

      </div>
    </div>
  )
}
