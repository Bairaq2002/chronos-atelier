import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Chronos Atelier</h2>

          <p>
            Zeitlose Eleganz.
            <br />
            Exklusive Uhren für besondere Momente.
          </p>

          <Link
            to="/home"
            className="footer-home-button"
          >
            Zur Startseite
          </Link>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <h3>NAVIGATION</h3>

          <Link to="/home">
            Home
          </Link>

          <Link to="/about">
            Über uns
          </Link>

          <Link to="/products">
            Kollektion
          </Link>

          <Link to="/contact">
            Kontakt
          </Link>
        </div>

        {/* KUNDENBEREICH */}
        <div className="footer-links">
          <h3>KUNDENBEREICH</h3>

          <Link to="/profile">
            Profil
          </Link>

          <Link to="/orders">
            Bestellungen
          </Link>

          <Link to="/cart">
            Warenkorb
          </Link>
        </div>

        {/* RECHTLICHES */}
        <div className="footer-links">
          <h3>RECHTLICHES</h3>

          <Link to="/impressum">
            Impressum
          </Link>

          <Link to="/datenschutz">
            Datenschutz
          </Link>

          <Link to="/agb">
            AGB
          </Link>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          ©️ 2026 Chronos Atelier.
          Alle Rechte vorbehalten.
        </p>

        <div className="footer-bottom-links">
          <Link to="/impressum">
            Impressum
          </Link>

          <span>•</span>

          <Link to="/datenschutz">
            Datenschutz
          </Link>

          <span>•</span>

          <Link to="/agb">
            AGB
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;