import { useEffect, useState } from 'react'
import FoodCard from '../components/FoodCard'
import SearchBar from '../components/SearchBar'
import { fetchFoodData } from '../services/api'
import { getImageByKey } from '../utils/imageMap'

export default function Menu() {
  const [foods, setFoods] = useState([])
  const [searchText, setSearchText] = useState('')
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
    return (
      food.name.toLowerCase().includes(query) || food.category.toLowerCase().includes(query)
    )
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black text-slate-900">Food Listing</h1>
        <p className="text-slate-500">Search by food name or category instantly.</p>
      </div>
      <SearchBar value={searchText} onChange={setSearchText} />

      {loading ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-80 animate-pulse rounded-3xl bg-slate-100" />
          ))}
        </div>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={{ ...food, image: getImageByKey(food.imageKey ?? food.category) }} />
          ))}
        </div>
      )}
    </div>
  )
}
