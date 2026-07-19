import { useEffect, useState } from 'react'
import CategorySection from '../components/CategorySection'
import FoodCard from '../components/FoodCard'
import HeroBanner from '../components/HeroBanner'
import SearchBar from '../components/SearchBar'
import { fetchFoodData } from '../services/api'
import { getImageByKey } from '../utils/imageMap'

const offers = [
  'Flat ₹150 off on orders above ₹499',
  'Free delivery on your first 3 orders',
  'Up to 30% off on selected combos',
]

export default function Home() {
  const [foods, setFoods] = useState([])
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const data = await fetchFoodData()
        setFoods(data)
      } finally {
        setLoading(false)
      }
    }

    loadFoods()
  }, [])

  const filteredFoods = foods.filter((food) => {
    const query = searchText.toLowerCase()
    const matchesSearch =
      food.name.toLowerCase().includes(query) || food.category.toLowerCase().includes(query)
    const matchesCategory = category === 'all' || food.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />

      <section className="mx-auto -mt-8 max-w-7xl px-4 sm:px-6">
        <SearchBar value={searchText} onChange={setSearchText} />
      </section>

      <CategorySection onSelect={(selectedCategory) => setCategory(selectedCategory)} />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6" id="menu">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Popular Dishes</h2>
          <button onClick={() => setCategory('all')} className="text-sm font-semibold text-brand-600">
            Clear Filter
          </button>
        </div>

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-80 animate-pulse rounded-3xl bg-slate-100" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredFoods.map((food) => (
              <FoodCard key={food.id} food={{ ...food, image: getImageByKey(food.imageKey ?? food.category) }} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-orange-50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Why Choose Us</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {['Fast Delivery', 'Quality Ingredients', 'Easy Tracking'].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{item}</h3>
                <p className="mt-2 text-sm text-slate-500">Trusted service with premium food packaging and speed.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Offers</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer} className="rounded-3xl bg-brand-50 p-5 text-brand-700 shadow-sm">
              <p className="font-semibold">{offer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
