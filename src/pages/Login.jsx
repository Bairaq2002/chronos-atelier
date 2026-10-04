import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="page">
      <section className="auth-page">
        <div className="auth-card">
          <p className="section-label">CHRONOS ATELIER</p>

          <h1>Willkommen zurück</h1>

          <p className="auth-description">
            Melden Sie sich an, um auf Ihr Profil und
            Ihre Bestellungen zuzugreifen.
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label htmlFor="email">E-Mail</label>

            <input
              id="email"
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              required
            />

            <label htmlFor="password">Passwort</label>

            <input
              id="password"
              type="password"
              placeholder="Ihr Passwort"
              required
            />

            <button type="submit">
              Anmelden
            </button>
          </form>

          <p className="auth-footer">
            Noch kein Konto?{" "}
            <Link to="/register">
              Jetzt registrieren
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;