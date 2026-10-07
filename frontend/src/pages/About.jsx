import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      {/* Hero */}
      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-label">
            CHRONOS ATELIER
          </p>

          <h1>
            Über uns
          </h1>

          <div className="about-line"></div>

          <p>
            Zeitlose Eleganz trifft auf
            moderne Ästhetik.
          </p>

        </div>

      </section>


      {/* Story */}
      <section className="about-story">

        <div className="about-story-grid">

          <div className="about-story-content">

            <p className="about-section-label">
              UNSERE GESCHICHTE
            </p>

            <h2>
              Eine Leidenschaft
              <br />
              für besondere Zeitmesser.
            </h2>

            <p>
              Chronos Atelier steht für hochwertige
              Uhren, zeitloses Design und die Liebe
              zum Detail.
            </p>

            <p>
              Unsere Kollektion wurde geschaffen,
              um klassische Eleganz mit modernen
              Akzenten zu verbinden.
            </p>

            <p>
              Denn eine Uhr zeigt nicht nur die Zeit.
              Sie begleitet besondere Momente und
              erzählt ein Stück Persönlichkeit.
            </p>

          </div>

          <div className="about-story-image">
            <img
              src="/watches/watch2.jpg"
              alt="Chronos Atelier Uhr"
            />
          </div>

        </div>

      </section>


      {/* Values */}
      <section className="about-values">

        <div className="about-values-header">

          <p className="about-section-label">
            UNSERE WERTE
          </p>

          <h2>
            Was uns auszeichnet
          </h2>

        </div>


        <div className="about-values-grid">

          <article className="about-value-card">
            <span>01</span>
            <h3>Eleganz</h3>
            <p>
              Zeitlose Designs, die auch nach Jahren
              ihren besonderen Charakter behalten.
            </p>
          </article>


          <article className="about-value-card">
            <span>02</span>
            <h3>Qualität</h3>
            <p>
              Wir legen Wert auf hochwertige Materialien
              und sorgfältig ausgewählte Details.
            </p>
          </article>


          <article className="about-value-card">
            <span>03</span>
            <h3>Individualität</h3>
            <p>
              Jede Uhr soll den persönlichen Stil
              ihres Trägers unterstreichen.
            </p>
          </article>

        </div>

      </section>


      {/* Quote */}
      <section className="about-quote">

        <div className="about-quote-content">

          <div className="about-quote-mark">
            “
          </div>

          <h2>
            Zeit vergeht.
            <br />
            Stil bleibt.
          </h2>

          <p>
            CHRONOS ATELIER
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <p className="about-section-label">
          CHRONOS ATELIER
        </p>

        <h2>
          Entdecken Sie unsere
          <br />
          Kollektion.
        </h2>

        <Link
          to="/products"
          className="about-cta-button"
        >
          Kollektion entdecken
        </Link>

      </section>

    </main>
  );
}

export default About;