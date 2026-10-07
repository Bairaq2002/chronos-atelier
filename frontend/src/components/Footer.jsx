import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Copyright */}
        <div className="footer-copyright">
          <p>©️ 2026 Chronos Atelier</p>
        </div>

        {/* Main Links */}
        <div className="footer-links-section">

          <h3>Navigation</h3>

          <Link to="/home">Home</Link>
          <Link to="/about">Über uns</Link>
          <Link to="/products">Kollektion</Link>
          <Link to="/contact">Kontakt</Link>

        </div>

        {/* Customer Area */}
        <div className="footer-links-section">

          <h3>Kundenbereich</h3>

          <Link to="/profile">Profil</Link>
          <Link to="/orders">Bestellungen</Link>
          <Link to="/cart">Warenkorb</Link>

        </div>

        {/* Legal */}
        <div className="footer-links-section">

          <h3>Rechtliches</h3>

          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
          <Link to="/agb">AGB</Link>

        </div>

        {/* Brand */}
        <div className="footer-brand">

          <h2>Chronos Atelier</h2>

          <p>
            Exklusive Uhren für besondere Momente.
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          ©️ 2026 Chronos Atelier. Alle Rechte vorbehalten.
        </p>

      </div>

    </footer>
  );
}

export default Footer;