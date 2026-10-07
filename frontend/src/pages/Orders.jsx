import { Link } from "react-router-dom";

function Orders() {
  return (
    <main className="orders-page">
      <div className="orders-background">

        <section className="orders-card">

          <div className="orders-header">

            <p className="orders-label">
              CHRONOS ATELIER
            </p>

            <h1>Meine Bestellungen</h1>

            <p className="orders-description">
              Hier werden Ihre Bestellungen angezeigt.
            </p>

          </div>

          <div className="empty-orders">

            <div className="orders-icon">
              ✓
            </div>

            <h2>Noch keine Bestellungen</h2>

            <p>
              Sobald Sie eine Bestellung aufgegeben haben,
              wird sie hier angezeigt.
            </p>

            <Link
              to="/products"
              className="orders-button"
            >
              Zur Kollektion
            </Link>

          </div>

          <div className="orders-divider">
            <span>CHRONOS ATELIER</span>
          </div>

          <p className="orders-footer-text">
            Exklusive Uhren für besondere Momente.
          </p>

        </section>

      </div>
    </main>
  );
}

export default Orders;