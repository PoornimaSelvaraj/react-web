
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="section-tag">ABOUT NEXORA</span>
            <h1 className="page-title mt-3">
              Turning ideas into meaningful experiences.
            </h1>
            <p className="text-secondary mt-4">
              Nexora is a digital solutions brand focused on helping
              businesses build a strong and effective online presence.
            </p>
            <p className="text-secondary">
              Our approach combines creativity, modern technology,
              and a commitment to quality. We believe great work
              starts with understanding people and their goals.
            </p>
            <Link to="/contact" className="btn btn-primary mt-3">
              Work With Us
            </Link>
          </div>

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Team collaborating in an office"
              className="img-fluid rounded-4 about-image"
            />
          </div>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="info-card">
              <i className="bi bi-bullseye feature-icon"></i>
              <h4>Our Mission</h4>
              <p>Deliver practical digital solutions that help our clients move forward.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <i className="bi bi-eye feature-icon"></i>
              <h4>Our Vision</h4>
              <p>Make technology more useful, accessible, and impactful for businesses.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <i className="bi bi-heart feature-icon"></i>
              <h4>Our Values</h4>
              <p>Build every relationship with honesty, creativity, and care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
