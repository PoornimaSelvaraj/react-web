
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
      <div className="container py-2">
        <Link className="navbar-brand fw-bold fs-3" to="/" onClick={closeMenu}>
          Nexora<span className="brand-dot">.</span>
        </Link>

        <button
          className="navbar-toggler shadow-none"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
            <Link
              to="/login"
              className="btn btn-outline-primary px-4"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-primary px-4"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
