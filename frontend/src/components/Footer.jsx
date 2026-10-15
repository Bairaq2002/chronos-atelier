import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/home" className="footer-logo">
            Chronos Atelier
          </Link>

          <p className="footer-tagline">
            Zeitlose Eleganz.
            <br />
            Exklusive Uhren für besondere Momente.
          </p>

          <div className="footer-brand-line" />

          <Link to="/products" className="footer-home-button">
            Unsere Kollektion <span>→</span>
          </Link>
        </div>

        {/* NAVIGATION */}
        <div className="footer-column footer-links">
          <h3>Navigation</h3>
          <Link to="/home">Home</Link>
          <Link to="/about">Über uns</Link>
          <Link to="/products">Kollektion</Link>
          <Link to="/contact">Kontakt</Link>
        </div>

        {/* KUNDENBEREICH */}
        <div className="footer-column footer-links">
          <h3>Kundenbereich</h3>
          <Link to="/profile">Mein Profil</Link>
          <Link to="/orders">Meine Bestellungen</Link>
          <Link to="/cart">Warenkorb</Link>
        </div>

        {/* RECHTLICHES */}
        <div className="footer-column footer-links">
          <h3>Rechtliches</h3>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
          <Link to="/agb">AGB</Link>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          ©️ {new Date().getFullYear()} Chronos Atelier.
          Alle Rechte vorbehalten.
        </p>

        <div className="footer-bottom-links">
          <Link to="/impressum">Impressum</Link>
          <span>•</span>
          <Link to="/datenschutz">Datenschutz</Link>
          <span>•</span>
          <Link to="/agb">AGB</Link>
        </div>

        <p className="footer-signature">
          Zeitlose Schönheit. Für immer.
        </p>
      </div>
    </footer>
  );
}

export default Footer;