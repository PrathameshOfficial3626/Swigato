import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const navLinkClasses = ({ isActive }) =>
  `px-3 py-2 rounded-full text-sm font-medium transition ${
    isActive ? 'bg-brand-500 text-white' : 'text-slate-700 hover:bg-brand-50 hover:text-brand-600'
  }`

export default function Navbar() {
  const { totalItems } = useCart()
  const { currentUser, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-brand-600">
          <span className="rounded-full bg-brand-500 px-3 py-1 text-white">S</span>
          Swigato
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/menu" className={navLinkClasses}>
            Menu
          </NavLink>
          <NavLink to="/cart" className={navLinkClasses}>
            Cart
          </NavLink>
          {currentUser ? (
            <NavLink to="/profile" className={navLinkClasses}>
              Profile
            </NavLink>
          ) : (
            <NavLink to="/login" className={navLinkClasses}>
              Login
            </NavLink>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative rounded-full bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700"
          >
            Cart
            <span className="ml-2 rounded-full bg-brand-500 px-2 py-0.5 text-xs text-white">
              {totalItems}
            </span>
          </Link>

          {currentUser && (
            <button
              onClick={logout}
              className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
