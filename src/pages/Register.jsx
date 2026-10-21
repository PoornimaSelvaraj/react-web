
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Registration form validated. Connect a backend to create an account.");
  };

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-card">
          <Link to="/" className="auth-brand">
            Nexora<span>.</span>
          </Link>

          <h2 className="mt-4">Create your account</h2>
          <p className="text-secondary">Join us and get started today.</p>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                className="form-control"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Minimum 6 characters"
                value={form.password}
                onChange={handleChange}
                minLength={6}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={form.confirmPassword}
                onChange={handleChange}
                minLength={6}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              Create Account <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </form>

          <p className="text-center mt-4 mb-0">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
