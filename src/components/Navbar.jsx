import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import navLogo from '../assets/PSLogos/PSLogo_Logotype_green.png'
import brands from '../data/brands'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (hash) => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)

    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleBrandClick = (brandId) => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    navigate(`/brands/${brandId}`)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
          <img src={navLogo} alt="Pro Shop" className="navbar-logo-img" />
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}>
              Home
            </a>
          </li>
          <li
            className="navbar-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="navbar-dropdown-trigger"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Our Brands <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>
            <ul className={`navbar-dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <li>
                <a
                  href="#brands"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#brands'); }}
                >
                  All Brands
                </a>
              </li>
              <li className="dropdown-divider"></li>
              {brands.map((brand) => (
                <li key={brand.id}>
                  <button onClick={() => handleBrandClick(brand.id)}>
                    {brand.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
