import { Link } from "react-router-dom";

function Profile() {
  return (
    <main className="page">
      <section className="page-content">
        <p className="section-label">
          CHRONOS ATELIER
        </p>

        <h1>Mein Profil</h1>

        <p>
          Willkommen in Ihrem persönlichen Bereich.
        </p>

        <div className="profile-card">
          <h2>Persönliche Daten</h2>

          <p>Name: Noch nicht angemeldet</p>
          <p>E-Mail: —</p>

          <Link
            to="/login"
            className="hero-button"
          >
            Anmelden
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Profile;