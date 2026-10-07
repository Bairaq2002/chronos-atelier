import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(
        "Registrierung erfolgreich:",
        response.data
      );

      setSuccess(
        "Registrierung erfolgreich! Sie werden zum Login weitergeleitet."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error(
        "Registrierung Fehler:",
        error
      );

      if (error.response) {
        setError(
          error.response.data.message ||
            "Registrierung fehlgeschlagen."
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
    <main className="register-page">
      <div className="register-background">

        <section className="register-card">

          <div className="register-header">

            <p className="register-label">
              CHRONOS ATELIER
            </p>

            <h1>
              Konto erstellen
            </h1>

            <p className="register-description">
              Erstellen Sie Ihr persönliches Konto
              und entdecken Sie zeitlose Eleganz.
            </p>

          </div>

          {error && (
            <div className="register-error">
              {error}
            </div>
          )}

          {success && (
            <div className="register-success">
              {success}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="register-form"
          >

            <div className="register-field">
              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Ihr Name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                required
              />
            </div>

            <div className="register-field">
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

            <div className="register-field">
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
              className="register-button"
              disabled={loading}
            >
              {loading
                ? "Registrierung..."
                : "Registrieren"}
            </button>

          </form>

          <div className="register-login">
            <span>
              Bereits ein Konto?
            </span>

            <Link to="/login">
              Jetzt anmelden
            </Link>
          </div>

          <div className="register-divider">
            <span>CHRONOS ATELIER</span>
          </div>

          <p className="register-footer-text">
            Exklusive Uhren für besondere Momente.
          </p>

        </section>

      </div>
    </main>
  );
}

export default Register;