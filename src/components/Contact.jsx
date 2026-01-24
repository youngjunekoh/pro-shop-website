function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-lead">
              Interested in partnering with Pro Shop Holdings or learning more
              about our brands?
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div>
                  <h4>Contact Us</h4>
                  <a href="mailto:caddie@proshop.inc">caddie@proshop.inc</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-brands">
            <h3>Our Brands</h3>
            <div className="brand-links">
              <a href="https://skratch.golf" target="_blank" rel="noopener noreferrer" className="brand-link">
                <span>Skratch</span>
                <span className="external-icon">↗</span>
              </a>
              <a href="https://www.golfwrx.com" target="_blank" rel="noopener noreferrer" className="brand-link">
                <span>GolfWRX</span>
                <span className="external-icon">↗</span>
              </a>
              <a href="https://sugarloafsocialclub.com" target="_blank" rel="noopener noreferrer" className="brand-link">
                <span>Sugarloaf Social Club</span>
                <span className="external-icon">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
