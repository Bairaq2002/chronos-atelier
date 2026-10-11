import { useState } from "react";
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submittedMessage, setSubmittedMessage] =
    useState(null);
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedMessage({
      name: form.name,
      email: form.email,
      message: form.message,
    });
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <main className="contact-page">
      <div className="contact-background">
        <section className="contact-card">
          <header className="contact-header">
            <p className="contact-label">
              CHRONOS ATELIER
            </p>
            <h1>Kontakt</h1>
            <p className="contact-description">
              Haben Sie Fragen zu unseren Uhren?
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </header>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-field">
              <label htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Ihr Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">
                E-Mail-Adresse
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">
                Nachricht
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Ihre Nachricht"
                rows="6"
                value={form.message}
                onChange={handleChange}
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
          {submittedMessage && (
            <section
              className="contact-submitted-message"
              aria-live="polite"
            >
              <p className="contact-label">
                CHRONOS ATELIER
              </p>
              <h2>✓ Nachricht erfolgreich gesendet!</h2>
              <p className="contact-success-text">
                Vielen Dank, {submittedMessage.name}.
                Ihre Nachricht wurde in dieser Ansicht
                registriert.
              </p>
              <div className="contact-message-details">
                <p>
                  <strong>Name:</strong>{" "}
                  {submittedMessage.name}
                </p>
                <p>
                  <strong>E-Mail:</strong>{" "}
                  {submittedMessage.email}
                </p>
                <p>
                  <strong>Ihre Nachricht:</strong>
                </p>
                <p className="contact-message-content">
                  {submittedMessage.message}
                </p>
              </div>
              <button
                type="button"
                className="contact-button"
                onClick={() => setSubmittedMessage(null)}
              >
                Neue Nachricht schreiben
              </button>
            </section>
          )}
          <div className="contact-info">
            <div className="contact-info-item">
              <span>E-MAIL</span>
              <a href="mailto:info@chronos-atelier.de">
                info@chronos-atelier.de
              </a>
            </div>
            <div className="contact-info-item">
              <span>TELEFON</span>
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