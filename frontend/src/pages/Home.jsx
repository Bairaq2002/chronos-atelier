import { Link } from "react-router-dom";
import WelcomeBanner from "../components/WelcomeBanner";

function Home() {
  return (
    <main className="home-luxury">
      {/* HERO */}
      <section className="home-luxury-hero">
        <div className="home-luxury-copy">
          <p className="home-luxury-eyebrow">
            CHRONOS ATELIER
          </p>

          <h1>
            Zeitlose Eleganz
            <br />
            für besondere Momente.
          </h1>

          <p className="home-luxury-description">
            Entdecken Sie unsere exklusive Kollektion
            aus erlesenen Uhren, die Stil, Präzision und
            Individualität vereinen.
          </p>

          <div className="home-luxury-actions">
            <Link
              to="/products"
              className="home-luxury-primary"
            >
              Kollektion entdecken →
            </Link>

            <Link
              to="/about"
              className="home-luxury-outline"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>

        <div className="home-luxury-image">
          <img
            src="/watches/watch2.jpg"
            alt="Elegante goldene Armbanduhr von Chronos Atelier"
          />
          <div className="home-luxury-image-caption">
            <span>TIMELESS DESIGN</span>
            <span>Exklusivität in jedem Detail</span>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="home-luxury-benefits">
        <article className="home-luxury-benefit">
          <span>◇</span>
          <div>
            <h3>Exklusive Uhren</h3>
            <p>Für besondere Momente.</p>
          </div>
        </article>

        <article className="home-luxury-benefit">
          <span>♕</span>
          <div>
            <h3>Höchste Qualität</h3>
            <p>Mit Liebe zum Detail.</p>
          </div>
        </article>

        <article className="home-luxury-benefit">
          <span>♧</span>
          <div>
            <h3>Schneller Versand</h3>
            <p>Zuverlässig und sicher.</p>
          </div>
        </article>

        <article className="home-luxury-benefit">
          <span>♢</span>
          <div>
            <h3>Sicherer Einkauf</h3>
            <p>Ihre Daten sind geschützt.</p>
          </div>
        </article>
      </section>

      {/* EXISTING WELCOME BANNER */}
      <WelcomeBanner />

      {/* BRAND STORY */}
      <section className="home-luxury-story">
        <div className="home-luxury-story-copy">
          <p className="home-luxury-eyebrow">
            UNSERE PHILOSOPHIE
          </p>

          <h2>
            Eine Leidenschaft
            <br />
            für besondere Zeitmesser.
          </h2>

          <p>
            Chronos Atelier steht für zeitloses Design,
            ausgewählte Materialien und die Liebe zu
            außergewöhnlichen Details.
          </p>

          <Link
            to="/about"
            className="home-luxury-text-link"
          >
            Unsere Geschichte entdecken →
          </Link>
        </div>

        <div className="home-luxury-story-image">
          <img
            src="/watches/watch3.jpg"
            alt="Elegante Uhr aus der Chronos Atelier Kollektion"
          />
        </div>
      </section>

      {/* COLLECTION CTA */}
      <section className="home-luxury-collection">
        <p className="home-luxury-eyebrow">
          UNSERE KOLLEKTION
        </p>

        <h2>Finden Sie Ihren persönlichen Stil.</h2>

        <p>
          Entdecken Sie Uhren, die Eleganz und
          Persönlichkeit miteinander verbinden.
        </p>

        <Link
          to="/products"
          className="home-luxury-primary"
        >
          Alle Uhren entdecken →
        </Link>
      </section>
    </main>
  );
}

export default Home;