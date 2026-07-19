const categories = [
  'Burgers',
  'Pizza',
  'Wraps',
  'Noodles',
  'Beverages',
  'Snacks',
]

export default function CategorySection({ onSelect }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-slate-900">Popular Categories</h2>
        <span className="text-sm text-slate-500">Discover your cravings</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}
