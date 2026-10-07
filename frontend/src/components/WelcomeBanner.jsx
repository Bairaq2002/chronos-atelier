import { Link } from "react-router-dom";

function WelcomeBanner() {
  return (
    <section className="welcome-banner">
      <div className="welcome-banner-content">
        <p className="section-label">
          CHRONOS ATELIER
        </p>

        <h2>Willkommen bei Chronos Atelier</h2>

        <p>
          Entdecken Sie unsere exklusive Kollektion
          zeitloser Uhren und finden Sie das perfekte
          Modell für Ihren persönlichen Stil.
        </p>

        <Link
          to="/products"
          className="welcome-banner-button"
        >
          Kollektion entdecken
        </Link>
      </div>
    </section>
  );
}

export default WelcomeBanner;