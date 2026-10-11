import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Bitte melden Sie sich zuerst an.");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data.user);
      } catch (err) {
        console.error("Profil konnte nicht geladen werden:", err);
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("isAuthenticated");
          setError(
            "Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an."
          );
        } else {
          setError(
            "Die Profildaten konnten nicht geladen werden. Bitte versuchen Sie es erneut."
          );
        }
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/login";
  };
  return (
    <main className="profile-page">
      <div className="profile-background">
        <section className="profile-card">
          <header className="profile-header">
            <p className="profile-label">
              CHRONOS ATELIER
            </p>
            <h1>Mein Profil</h1>
            <p className="profile-description">
              Willkommen in Ihrem persönlichen Bereich.
            </p>
          </header>
          {loading ? (
            <div className="profile-status">
              <div className="profile-loader" />
              <p>Ihre Profildaten werden geladen...</p>
            </div>
          ) : error ? (
            <div className="profile-status">
              <p className="profile-error">{error}</p>
              <Link
                to="/login"
                className="profile-button"
              >
                Jetzt anmelden
              </Link>
            </div>
          ) : user ? (
            <>
              <section className="profile-info-card">
                <div className="profile-avatar">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <h2>Persönliche Daten</h2>
                <div className="profile-info-row">
                  <span>Name</span>
                  <strong>{user.name}</strong>
                </div>
                <div className="profile-info-row">
                  <span>E-Mail</span>
                  <strong>{user.email}</strong>
                </div>
                <div className="profile-info-row">
                  <span>Kontostatus</span>
                  <strong className="profile-active">
                    Aktiv
                  </strong>
                </div>
              </section>
              <div className="profile-actions">
                <Link
                  to="/products"
                  className="profile-button"
                >
                  Kollektion entdecken
                </Link>
                <Link
                  to="/orders"
                  className="profile-secondary-button"
                >
                  Meine Bestellungen
                </Link>
                <button
                  type="button"
                  className="profile-logout-button"
                  onClick={handleLogout}
                >
                  Abmelden
                </button>
              </div>
            </>
          ) : null}
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