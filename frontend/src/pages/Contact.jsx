function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-background">

        <section className="contact-card">

          <div className="contact-header">

            <p className="contact-label">
              CHRONOS ATELIER
            </p>

            <h1>Kontakt</h1>

            <p className="contact-description">
              Haben Sie Fragen zu unseren Uhren?
              Wir freuen uns auf Ihre Nachricht.
            </p>

          </div>

          <form className="contact-form">

            <div className="contact-field">
              <label htmlFor="contact-name">
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder="Ihr Name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">
                E-Mail-Adresse
              </label>

              <input
                id="contact-email"
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">
                Nachricht
              </label>

              <textarea
                id="contact-message"
                placeholder="Ihre Nachricht"
                rows="6"
                required
              />
            </div>

            <button
              type="submit"
              className="contact-button"
            >
              Nachricht senden
            </button>

          </form>

          <div className="contact-info">

            <div className="contact-info-item">
              <span>E-Mail</span>

              <a href="mailto:info@chronos-atelier.de">
                info@chronos-atelier.de
              </a>
            </div>

            <div className="contact-info-item">
              <span>Telefon</span>

              <a href="tel:+491234567890">
                +49 123 4567890
              </a>
            </div>

          </div>

          <div className="contact-divider">
            <span>CHRONOS ATELIER</span>
          </div>

          <p className="contact-footer-text">
            Exklusive Uhren für besondere Momente.
          </p>

        </section>

      </div>
    </main>
  );
}

export default Contact;