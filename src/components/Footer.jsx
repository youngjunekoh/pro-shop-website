function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-pro">PRO</span>
              <span className="logo-shop">SHOP</span>
            </div>
            <p>Golf Media & Lifestyle Holdings</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#brands">Our Brands</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Portfolio</h4>
              <ul>
                <li><a href="https://skratch.golf" target="_blank" rel="noopener noreferrer">Skratch</a></li>
                <li><a href="https://www.golfwrx.com" target="_blank" rel="noopener noreferrer">GolfWRX</a></li>
                <li><a href="https://sugarloafsocialclub.com" target="_blank" rel="noopener noreferrer">Sugarloaf Social Club</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@proshop.inc">info@proshop.inc</a></li>
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
