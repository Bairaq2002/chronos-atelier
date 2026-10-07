import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/home");
    } catch (error) {
      console.error("Login Fehler:", error);

      if (error.response) {
        setError(
          error.response.data.message ||
            "E-Mail oder Passwort ist falsch."
        );
      } else {
        setError(
          "Der Server ist momentan nicht erreichbar."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-background">

        <section className="login-card">

          <div className="login-header">

            <p className="login-label">
              CHRONOS ATELIER
            </p>

            <h1>
              Willkommen zurück
            </h1>

            <p className="login-description">
              Melden Sie sich an und entdecken Sie
              zeitlose Eleganz.
            </p>

          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >

            <div className="login-field">
              <label htmlFor="email">
                E-Mail-Adresse
              </label>

              <input
                id="email"
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">
                Passwort
              </label>

              <input
                id="password"
                type="password"
                placeholder="Ihr Passwort"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading
                ? "Anmeldung..."
                : "Anmelden"}
            </button>

          </form>

          <div className="login-register">
            <span>
              Noch kein Konto?
            </span>

            <Link to="/register">
              Jetzt registrieren
            </Link>
          </div>

          <div className="login-divider">
            <span>CHRONOS ATELIER</span>
          </div>

          <p className="login-footer-text">
            Exklusive Uhren für besondere Momente.
          </p>

        </section>

      </div>
    </main>
  );
}

export default Login;