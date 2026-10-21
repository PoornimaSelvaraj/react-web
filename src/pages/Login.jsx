
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Login form validated. Connect a backend for authentication.");
  };

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-card">
          <Link to="/" className="auth-brand">
            Nexora<span>.</span>
          </Link>

          <h2 className="mt-4">Welcome back!</h2>
          <p className="text-secondary">Sign in to continue to your account.</p>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={6}
              />
            </div>

            <button className="btn btn-primary w-100 mt-2" type="submit">
              Login <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </form>

          <p className="text-center mt-4 mb-0">
            Don't have an account?{" "}
            <Link to="/register" className="auth-link">Create account</Link>
          </p>

          <button
            className="btn btn-link w-100 mt-2 text-decoration-none"
            onClick={() => navigate("/")}
          >
            <i className="bi bi-arrow-left me-2"></i>Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
