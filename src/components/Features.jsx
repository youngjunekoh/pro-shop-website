function Features() {
  const brands = [
    {
      name: 'Skratch',
      tagline: 'Stories at the intersection of golf and culture',
      description: 'Skratch is a digital media and lifestyle brand dedicated to golf culture, style, and storytelling. Through original video content like "Adventures in Golf," editorial features, and cultural commentary, Skratch connects with the modern golf enthusiast who sees the game as more than just a sport.',
      features: ['Original Video Series', 'Editorial Content', 'Style & Gear Coverage', 'Cultural Storytelling'],
      url: 'https://skratch.golf',
      logo: 'https://storage.googleapis.com/prod-skratch-strapi/logo-black.svg'
    },
    {
      name: 'GolfWRX',
      tagline: 'The world\'s largest online golf community',
      description: 'Founded in 2005, GolfWRX has grown into the most trusted destination for golf enthusiasts worldwide. With over 2 million monthly readers, GolfWRX delivers expert equipment reviews, breaking news, active community forums, and the largest free golf classifieds on the web.',
      features: ['2M+ Monthly Readers', 'Equipment Reviews', 'Community Forums', 'Golf Classifieds'],
      url: 'https://www.golfwrx.com',
      logo: 'https://logovectorseek.com/wp-content/uploads/2021/11/golfwrx-holdings-llc-logo-vector.png'
    },
    {
      name: 'Sugarloaf Social Club',
      tagline: 'Play or Perish',
      description: 'Sugarloaf Social Club is a beacon for golf enthusiasts with the singular focus of delivering joy to the global golf community. Through curated merchandise, accessories, and a vibrant community presence, Sugarloaf brings a fresh, modern energy to golf culture.',
      features: ['Golf Apparel & Gear', 'Community-Driven', 'Modern Golf Culture', 'Global Community'],
      url: 'https://sugarloafsocialclub.com',
      logo: 'https://www.sugarloafsocialclub.com/cdn/shop/files/SSC-Arrow-Bean-Red.png?v=1758297756&width=500'
    },
    {
      name: 'Pro Shop Studios',
      tagline: 'Golf entertainment for the world stage',
      description: 'Pro Shop Studios is our entertainment division producing premium scripted and unscripted content at the intersection of golf and culture. As co-producers of Happy Gilmore 2 and the revival of The Skins Game on Prime Video, Pro Shop Studios brings golf to mainstream audiences worldwide.',
      features: ['Film & TV Production', 'Happy Gilmore 2', 'The Skins Game', 'Full Swing'],
      url: null,
      logo: null
    }
  ]

  return (
    <section id="brands" className="brands">
      <div className="container">
        <h2>Our Brands</h2>
        <p className="section-subtitle">
          Four distinct brands united by a shared passion for golf
        </p>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-header">
                <div className="brand-header-text">
                  <h3>{brand.name}</h3>
                  <p className="brand-tagline">{brand.tagline}</p>
                </div>
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="brand-logo"
                  />
                ) : (
                  <div className="brand-logo-text">
                    <span className="logo-pro">PRO SHOP</span>
                    <span className="logo-studios">STUDIOS</span>
                  </div>
                )}
              </div>

              <p className="brand-description">{brand.description}</p>

              <ul className="brand-features">
                {brand.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {brand.url ? (
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-brand"
                >
                  Visit {brand.name} <span className="external-icon">↗</span>
                </a>
              ) : (
                <span className="btn btn-brand btn-coming-soon">Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
