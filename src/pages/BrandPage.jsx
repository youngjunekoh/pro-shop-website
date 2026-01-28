import { useParams, Link } from 'react-router-dom'
import brands from '../data/brands'

function BrandPage() {
  const { brandId } = useParams()
  const brand = brands.find(b => b.id === brandId)

  if (!brand) {
    return (
      <section className="brand-page brand-not-found">
        <div className="container">
          <h1>Brand Not Found</h1>
          <p>Sorry, we couldn't find that brand.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="brand-page">
      <div className="brand-page-hero">
        <div className="container">
          <div className="brand-page-header">
            {brand.logo ? (
              <img src={brand.logo} alt={`${brand.name} logo`} className="brand-page-logo" />
            ) : (
              <div className="brand-page-logo-text">
                <span className="logo-pro">PRO SHOP</span>
                <span className="logo-studios">STUDIOS</span>
              </div>
            )}
            <div className="brand-page-title">
              <h1>{brand.name}</h1>
              <p className="brand-page-tagline">{brand.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-page-content">
        <div className="container">
          <div className="brand-page-about">
            <h2>About {brand.name}</h2>
            <p>{brand.about}</p>
          </div>

          <div className="brand-page-features">
            <h2>What We Do</h2>
            <div className="brand-features-grid">
              {brand.fullFeatures.map((feature, index) => (
                <div key={index} className="brand-feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="brand-page-cta">
            <Link to="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
            {brand.url && (
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit {brand.name} <span className="external-icon">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandPage
