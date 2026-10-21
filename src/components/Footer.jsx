
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5 col-md-6">
            <Link to="/" className="footer-brand">
              Nexora<span>.</span>
            </Link>
            <p className="footer-description mt-3">
              We help businesses grow through innovative digital
              solutions, thoughtful design, and reliable technology.
            </p>
            <div className="d-flex gap-3 social-links mt-4">
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2 col-md-6">
            <h6>Quick Links</h6>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-6 col-lg-2 col-md-6">
            <h6>Account</h6>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6>Contact Us</h6>
            <p><i className="bi bi-envelope me-2"></i> hello@nexora.example</p>
            <p><i className="bi bi-geo-alt me-2"></i> Chennai, India</p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
          <p className="mb-0">© {new Date().getFullYear()} Nexora. All rights reserved.</p>
          <p className="mb-0">Designed for better business.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
