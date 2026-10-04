import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page">
      <section className="page-content not-found">
        <p className="section-label">
          CHRONOS ATELIER
        </p>

        <h1>404</h1>

        <h2>Seite nicht gefunden</h2>

        <p>
          Die gewünschte Seite existiert leider nicht.
        </p>

        <Link to="/" className="hero-button">
          Zur Startseite
        </Link>
      </section>
    </main>
  );
}

export default NotFound;