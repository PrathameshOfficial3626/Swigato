import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { currentUser } = useAuth()

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-soft">
        <h1 className="text-3xl font-black">Profile</h1>
        <div className="mt-5 space-y-3 text-sm">
          <p><span className="font-semibold">Name:</span> {currentUser?.fullName}</p>
          <p><span className="font-semibold">Email:</span> {currentUser?.email}</p>
          <p><span className="font-semibold">Mobile:</span> {currentUser?.mobile}</p>
        </div>
      </div>
    </div>
  )
}
