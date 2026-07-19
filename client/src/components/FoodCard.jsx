import { useCart } from '../context/CartContext'

export default function FoodCard({ food }) {
  const { addToCart } = useCart()

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <img src={food.image} alt={food.name} className="h-52 w-full object-cover" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{food.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{food.description}</p>
          </div>
          <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
            ⭐ {food.rating}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">{food.category}</p>
            <p className="mt-1 text-xl font-black text-slate-900">₹{food.price}</p>
          </div>
          <button
            onClick={() => addToCart(food)}
            className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
