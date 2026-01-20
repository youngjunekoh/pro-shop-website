function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-tagline">Golf Media & Lifestyle Holdings</p>
        <h1>
          <span className="logo-pro">PRO</span>
          <span className="logo-shop">SHOP</span>
          <span className="logo-holdings">HOLDINGS</span>
        </h1>
        <p className="hero-description">
          We own and operate the world's most influential golf media brands,
          connecting millions of passionate golfers through content, community, and culture.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Portfolio Brands</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">10M+</span>
            <span className="stat-label">Monthly Reach</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">2M+</span>
            <span className="stat-label">Community Members</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a href="#brands" className="btn btn-primary">Explore Our Brands</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
