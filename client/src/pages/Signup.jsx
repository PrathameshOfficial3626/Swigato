import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const initialForm = {
  fullName: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
}

export default function Signup() {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.fullName || !form.email || !form.mobile || !form.password || !form.confirmPassword) {
      setError('All fields are required.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const result = signup({
      fullName: form.fullName,
      email: form.email,
      mobile: form.mobile,
      password: form.password,
    })

    if (!result.success) {
      setError(result.message)
      return
    }

    setSuccess(result.message)
    setError('')
    setForm(initialForm)
    navigate('/login')
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10 sm:px-6">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">Create Account</h1>
        <p className="mt-2 text-sm text-slate-500">Register to start ordering your favorite food.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">Full Name</label>
            <input type="text" value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
            <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">Mobile Number</label>
            <input type="tel" value={form.mobile} onChange={(event) => setForm({ ...form, mobile: event.target.value })} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">Password</label>
            <input type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">Confirm Password</label>
            <input type="password" value={form.confirmPassword} onChange={(event) => setForm({ ...form, confirmPassword: event.target.value })} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500" />
          </div>

          {error && <p className="text-sm font-semibold text-rose-500">{error}</p>}
          {success && <p className="text-sm font-semibold text-emerald-600">{success}</p>}

          <button type="submit" className="w-full rounded-full bg-brand-500 px-4 py-3 font-semibold text-white">Signup</button>
        </form>

        <p className="mt-4 text-sm text-slate-500">
          Already a member?{' '}
          <Link to="/login" className="font-semibold text-brand-600">Login</Link>
        </p>
      </div>
    </div>
  )
}
