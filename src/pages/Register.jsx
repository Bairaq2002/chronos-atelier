import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <main className="page">
      <section className="auth-page">
        <div className="auth-card">
          <p className="section-label">
            CHRONOS ATELIER
          </p>

          <h1>Konto erstellen</h1>

          <p className="auth-description">
            Erstellen Sie Ihr persönliches Chronos-Atelier-Konto.
          </p>

          <form
            onSubmit={handleSubmit}
            className="auth-form"
          >
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              placeholder="Ihr Name"
              required
            />

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
              Registrieren
            </button>
          </form>

          <p className="auth-footer">
            Bereits ein Konto?{" "}
            <Link to="/login">
              Anmelden
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register;