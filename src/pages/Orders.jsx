import { Link } from "react-router-dom";

function Orders() {
  return (
    <main className="page">
      <section className="page-content">
        <p className="section-label">
          CHRONOS ATELIER
        </p>

        <h1>Meine Bestellungen</h1>

        <p>
          Hier werden Ihre Bestellungen angezeigt.
        </p>

        <div className="empty-orders">
          <h2>Noch keine Bestellungen</h2>

          <p>
            Sobald Sie eine Bestellung aufgegeben haben,
            wird sie hier angezeigt.
          </p>

          <Link
            to="/products"
            className="hero-button"
          >
            Zur Kollektion
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Orders;