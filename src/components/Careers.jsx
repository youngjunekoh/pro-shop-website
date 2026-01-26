import careersImg from '../assets/Dec25AllHands.jpeg'

function Careers() {
  return (
    <section id="careers" className="careers">
      <div className="container">
        <div className="careers-grid">
          <div className="careers-image">
            <img
              src={careersImg}
              alt="Pro Shop team all-hands"
            />
          </div>
          <div className="careers-content">
            <h2>Join Our Team</h2>
            <p>
              We're building the future of golf media, commerce and culture. If you're passionate
              about golf, storytelling and creating world-class content and experiences, we'd love to
              hear from you.
            </p>
            <a
              href="https://www.teamworkonline.com/golf-tennis-jobs/golf-jobs/proshop-jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Open Positions <span className="external-icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers
