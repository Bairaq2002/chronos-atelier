import { Link } from "react-router-dom";

function Profile() {
  return (
    <main className="profile-page">
      <div className="profile-background">

        <section className="profile-card">

          <div className="profile-header">

            <p className="profile-label">
              CHRONOS ATELIER
            </p>

            <h1>Mein Profil</h1>

            <p className="profile-description">
              Willkommen in Ihrem persönlichen Bereich.
            </p>

          </div>

          <div className="profile-info-card">

            <h2>Persönliche Daten</h2>

            <div className="profile-info-row">
              <span>Name</span>
              <strong>Noch nicht angemeldet</strong>
            </div>

            <div className="profile-info-row">
              <span>E-Mail</span>
              <strong>—</strong>
            </div>

          </div>

          <Link
            to="/login"
            className="profile-button"
          >
            Anmelden
          </Link>

          <div className="profile-divider">
            <span>CHRONOS ATELIER</span>
          </div>

          <p className="profile-footer-text">
            Exklusive Uhren für besondere Momente.
          </p>

        </section>

      </div>
    </main>
  );
}

export default Profile;