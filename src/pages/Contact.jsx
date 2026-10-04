function Contact() {
  return (
    <main className="page">
      <section className="page-content contact-page">
        <p className="section-label">CHRONOS ATELIER</p>

        <h1>Kontakt</h1>

        <p>
          Haben Sie Fragen zu unseren Uhren?
          Wir freuen uns auf Ihre Nachricht.
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Ihr Name"
            required
          />

          <input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            required
          />

          <textarea
            placeholder="Ihre Nachricht"
            rows="6"
            required
          />

          <button type="submit">
            Nachricht senden
          </button>
        </form>

        <div className="contact-info">
          <p>
            E-Mail:{" "}
            <a href="mailto:info@chronos-atelier.de">
              info@chronos-atelier.de
            </a>
          </p>

          <p>
            Telefon:{" "}
            <a href="tel:+491234567890">
              +49 123 4567890
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;