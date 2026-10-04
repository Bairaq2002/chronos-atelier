function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">CHRONOS ATELIER</p>

          <h1>
            Zeitlos.
            <br />
            Elegant.
            <br />
            Einzigartig.
          </h1>

          <p className="hero-text">
            Entdecken Sie unsere Kollektion hochwertiger Armbanduhren
            für Damen und Herren.
          </p>

          <a href="/products" className="hero-button">
            Kollektion entdecken
          </a>
        </div>
      </section>

      <section className="welcome-section">
        <p className="section-label">UNSERE KOLLEKTION</p>

        <h2>Eleganz, die bleibt.</h2>

        <p>
          Entdecken Sie sorgfältig ausgewählte Uhren für besondere
          Momente und den täglichen Stil.
        </p>
      </section>
    </main>
  );
}

export default Home;