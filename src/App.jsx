import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import BrandPage from './pages/BrandPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands/:brandId" element={<BrandPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
