import { Link } from "react-router-dom";
import WelcomeBanner from "../components/WelcomeBanner";

function Home() {
  return (
    <main className="home-page">

      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-overlay"></div>

        <div className="home-hero-content">

          <p className="home-label">
            CHRONOS ATELIER
          </p>

          <h1>
            Zeitlose
            <br />
            Eleganz
          </h1>

          <div className="home-line"></div>

          <p className="home-hero-text">
            Entdecken Sie exklusive Uhren,
            die klassische Eleganz mit modernem
            Design verbinden.
          </p>

          <Link
            to="/products"
            className="home-hero-button"
          >
            Kollektion entdecken
          </Link>

        </div>
      </section>

      {/* Introduction */}
      <section className="home-introduction">

        <div className="home-introduction-content">

          <p className="home-section-label">
            UNSERE PHILOSOPHIE
          </p>

          <h2>
            Zeit ist mehr als
            <br />
            nur ein Augenblick.
          </h2>

          <p>
            Bei Chronos Atelier verbinden wir
            zeitlose Ästhetik mit anspruchsvollem
            Design. Jede Uhr steht für Stil,
            Persönlichkeit und besondere Momente.
          </p>

          <Link
            to="/about"
            className="home-secondary-button"
          >
            Mehr über uns
          </Link>

        </div>

      </section>

      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Final CTA */}
      <section className="home-final">

        <div className="home-final-content">

          <p className="home-section-label">
            CHRONOS ATELIER
          </p>

          <h2>
            Finden Sie Ihre
            <br />
            perfekte Uhr.
          </h2>

          <p>
            Entdecken Sie unsere exklusive
            Kollektion für Damen und Herren.
          </p>

          <Link
            to="/products"
            className="home-final-button"
          >
            Zur Kollektion
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;