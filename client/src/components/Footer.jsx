export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-bold text-white">Swigato</h3>
          <p className="text-sm">Fresh meals, fast delivery, and delightful flavors delivered to your doorstep.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>support@swigato.com</li>
            <li>+91 98765 43210</li>
            <li>Pune, India</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
