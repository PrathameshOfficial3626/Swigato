import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-10">
      <div className="text-center">
        <h1 className="text-5xl font-black text-brand-600">404</h1>
        <p className="mt-3 text-xl font-semibold text-slate-900">Page not found</p>
        <Link to="/" className="mt-5 inline-block rounded-full bg-brand-500 px-4 py-2 font-semibold text-white">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
