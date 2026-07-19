import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cartItems, totalPrice, clearCart } = useCart()

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-black text-slate-900">Your Cart</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <p className="text-lg font-semibold text-slate-700">Your cart is empty.</p>
              <Link to="/menu" className="mt-4 inline-block rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
                Explore Menu
              </Link>
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        <aside className="rounded-3xl bg-slate-900 p-5 text-white">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹45</span>
            </div>
            <div className="flex justify-between border-t border-white/20 pt-3 font-bold">
              <span>Total</span>
              <span>₹{totalPrice + 45}</span>
            </div>
          </div>
          <button onClick={clearCart} className="mt-5 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900">
            Clear Cart
          </button>
        </aside>
      </div>
    </div>
  )
}
