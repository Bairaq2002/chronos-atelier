function Impressum() {
  return (
    <main className="legal-page">
      <section className="legal-card">

        <p className="legal-label">
          CHRONOS ATELIER
        </p>

        <h1>Impressum</h1>

        <p className="legal-intro">
          Willkommen bei Chronos Atelier.
          Auf dieser Seite finden Sie alle wichtigen
          Informationen zu unserem Unternehmen sowie
          unsere Kontaktdaten.
        </p>

        <div className="legal-section">
          <h2>Unternehmensinformationen</h2>

          <p>
            Chronos Atelier
            <br />
            Musterstraße 1
            <br />
            50667 Köln
            <br />
            Deutschland
          </p>
        </div>

        <div className="legal-section">
          <h2>Kontakt</h2>

          <p>
            E-Mail: info@chronos-atelier.de
            <br />
            Telefon: +49 123 4567890
          </p>
        </div>

        <div className="legal-divider">
          <span>CHRONOS ATELIER</span>
        </div>

        <p className="legal-footer-text">
          Transparenz, Vertrauen und klare Informationen.
        </p>

      </section>
    </main>
  );
}

export default Impressum;