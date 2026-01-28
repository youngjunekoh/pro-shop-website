import { Link } from 'react-router-dom'
import brands from '../data/brands'

function Features() {
  return (
    <section id="brands" className="brands">
      <div className="container">
        <h2>Our Brands</h2>
        <p className="section-subtitle">
          Our brands united by a shared passion for golf
        </p>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-card">
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

              <div className="brand-card-buttons">
                <Link to={`/brands/${brand.id}`} className="btn btn-learn-more">
                  Learn More
                </Link>
                {brand.url ? (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-brand"
                  >
                    Visit Site <span className="external-icon">↗</span>
                  </a>
                ) : (
                  <span className="btn btn-brand btn-coming-soon">_</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
