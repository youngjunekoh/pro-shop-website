import { Link, useLocation, useNavigate } from 'react-router-dom'
import footerLogo from '../assets/PSLogos/PSLogo_Logotyoe_white.png'
import brands from '../data/brands'

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (hash) => {
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={footerLogo} alt="Pro Shop" className="footer-logo-img" />
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#brands" onClick={(e) => { e.preventDefault(); handleNavClick('#brands'); }}>
                    Our Brands
                  </a>
                </li>
                <li>
                  <a href="#careers" onClick={(e) => { e.preventDefault(); handleNavClick('#careers'); }}>
                    Join Our Team
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/pro-shop-inc" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Brands</h4>
              <ul>
                {brands.map((brand) => (
                  <li key={brand.id}>
                    <Link to={`/brands/${brand.id}`}>{brand.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:caddie@proshop.inc">caddie@proshop.inc</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Pro Shop Holdings Inc. All Rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
