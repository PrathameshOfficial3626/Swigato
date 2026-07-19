import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.email || !form.password) {
      setError('Both fields are required.')
      return
    }

    const result = login(form.email, form.password)
    if (!result.success) {
      setError(result.message)
      return
    }

    navigate('/profile')
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10 sm:px-6">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">Welcome Back</h1>
        <p className="mt-2 text-sm text-slate-500">Sign in to continue your tasty journey.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">Password</label>
            <div className="flex items-center rounded-xl border border-slate-300 px-3 py-2">
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                className="w-full outline-none"
              />
              <button type="button" onClick={() => setShowPassword((value) => !value)} className="text-sm font-semibold text-brand-600">
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {error && <p className="text-sm font-semibold text-rose-500">{error}</p>}

          <button type="submit" className="w-full rounded-full bg-brand-500 px-4 py-3 font-semibold text-white">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-500">
          New to Swigato?{' '}
          <Link to="/signup" className="font-semibold text-brand-600">
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}
