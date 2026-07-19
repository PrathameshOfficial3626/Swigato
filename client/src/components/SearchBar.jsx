export default function SearchBar({ value, onChange }) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-soft">
        <span className="text-lg text-brand-500">🔍</span>
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search by name or category"
          className="w-full border-none bg-transparent text-sm outline-none"
        />
      </div>
    </div>
  )
}
