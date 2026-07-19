import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
