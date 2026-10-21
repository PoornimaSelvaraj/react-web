
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="section-tag">
                <i className="bi bi-stars me-2"></i>
                YOUR PARTNER IN DIGITAL GROWTH
              </span>

              <h1 className="hero-title mt-4">
                Build your vision.
                <br />
                <span>Grow your future.</span>
              </h1>

              <p className="hero-description mt-4">
                We create smart digital experiences that help
                businesses stand out, connect with customers,
                and achieve more.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/services" className="btn btn-primary btn-lg">
                  Explore Services <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link to="/about" className="btn btn-outline-dark btn-lg">
                  Discover More
                </Link>
              </div>

              <div className="row mt-5 g-3 hero-stats">
                <div className="col-4">
                  <h3>50+</h3>
                  <p>Projects</p>
                </div>
                <div className="col-4">
                  <h3>30+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="col-4">
                  <h3>5+</h3>
                  <p>Years of Growth</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-visual">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern professional workspace"
                  className="img-fluid hero-image"
                />
                <div className="floating-card">
                  <div className="floating-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div>
                    <h6>Growth Starts Here</h6>
                    <p>Ideas into impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section py-5">
        <div className="container text-center">
          <p className="text-secondary mb-4">
            SIMPLE SOLUTIONS. MEANINGFUL RESULTS.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <i className="bi bi-lightbulb feature-icon"></i>
              <h5 className="mt-3">Creative Thinking</h5>
              <p>Fresh ideas designed around your goals.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-shield-check feature-icon"></i>
              <h5 className="mt-3">Trusted Solutions</h5>
              <p>Reliable solutions built with care.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-rocket-takeoff feature-icon"></i>
              <h5 className="mt-3">Lasting Growth</h5>
              <p>Digital experiences made for progress.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center py-5">
          <h2>Ready to start something great?</h2>
          <p>Let's turn your next idea into reality.</p>
          <Link to="/contact" className="btn btn-light btn-lg mt-2">
            Let's Talk <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
