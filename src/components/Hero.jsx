import heroLogo from '../assets/PSLogos/PSLogo_Logotype_green.png'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-tagline">Golf Media & Lifestyle Holdings</p>
        </h1>
        <img src={heroLogo} alt="Pro Shop Holdings" className="hero-logo-img" />
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
