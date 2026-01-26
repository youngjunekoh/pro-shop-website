import heroLogo from '../assets/PSLogos/PSLogo_Logotype_frame_colors.png'

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* <div className="hero-bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="hero-bg-img"
        />
      </div> */}
      <div className="hero-content">
        <img src={heroLogo} alt="Pro Shop Holdings" className="hero-logo-img" />
        <p className="hero-tagline">Bringing Golf & Culture Together</p>
        <p className="hero-description">
          We own and operate the world's most influential golf media brands,
          connecting millions of passionate golfers through content, community, and culture.
        </p>
        <div className="hero-buttons">
          <a href="#brands" className="btn btn-primary">Explore Our Brands</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
