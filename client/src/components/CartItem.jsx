import { useCart } from '../context/CartContext'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3">
      <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
      <div className="flex-1">
        <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
        <p className="text-sm text-slate-500">₹{item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => updateQuantity(item.id, -1)} className="rounded-full border px-3 py-1">-</button>
        <span className="font-semibold">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)} className="rounded-full border px-3 py-1">+</button>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="text-sm font-semibold text-rose-500">
        Remove
      </button>
    </div>
  )
}
