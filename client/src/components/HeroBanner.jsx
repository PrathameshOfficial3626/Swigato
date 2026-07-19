import { getImageByKey } from '../utils/imageMap'

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-500 to-orange-400 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">Fast delivery, fresh taste</span>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Crave it. Order it. Love it.</h1>
          <p className="mt-4 max-w-xl text-base text-orange-50">
            Explore delicious meals from top-rated local kitchens and get them delivered in just a few clicks.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-600">
              Order Now
            </a>
            <a href="#offers" className="rounded-full border border-white/60 px-5 py-3 text-sm font-bold text-white">
              View Offers
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-soft">
          <img src={getImageByKey('hero')} alt="Hero food banner" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
