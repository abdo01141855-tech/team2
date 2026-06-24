import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { handleLogin, handleGoogleLogin } from "./Login.js";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password, setError, setLoading, navigate);
  };

  return (
    <div className="login-wrapper">

      <div className="login-left">

        <div>
          <div className="brand-logo">LUMINA</div>

          <div className="tabs">
            <button className="tab active">
              SIGN IN
            </button>

            <button className="tab" to="/register" onClick={() => navigate("/register")}>
              CREATE ACCOUNT
            </button>
          </div>
        </div>

        <div className="form-section">

          <h1 className="form-heading">
            Welcome back.
          </h1>

          <p className="form-subheading">
            Sign in to access your collection
          </p>

          {error && (
            <p className="error-msg">
              {error}
            </p>
          )}

          <form onSubmit={onSubmit}>

            <div className="field">
              <label>EMAIL ADDRESS</label>

              <input className="email-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <label>PASSWORD</label>

              <input className="password-input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="#" className="forgot-link">
              Forgot password?
            </a>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading ? "Please wait..." : "CONTINUE"}
            </button>

          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button
            className="btn-social"
            onClick={() => handleGoogleLogin(setError)}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <p className="bottom-link">
            Don't have an account?{" "}
            <Link to="/register">
              Create one
            </Link>
          </p>

        </div>

        <p className="terms-text">
          Protected by industry-standard encryption.
          Your data is never shared or sold.
        </p>

      </div>

      <div className="login-right">

        <div className="right-quote">
          "Designed for those who choose with intention."
        </div>

        <div className="right-caption">
          THE LUMINA COLLECTION
        </div>

        <div className="right-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="right-badge">
          EST. 2019 · CURATED LUXURY
        </div>

      </div>

    </div>
  );
}