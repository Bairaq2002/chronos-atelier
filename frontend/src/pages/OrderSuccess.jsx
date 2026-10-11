import { Link, useLocation, Navigate } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();
  const order = location.state?.order;

  // لا تعرض صفحة نجاح إذا لم يصل طلب فعلي إليها.
  if (!order) {
    return <Navigate to="/orders" replace />;
  }

  const total = Number(order.totalPrice ?? order.total ?? 0);

  return (
    <main className="checkout-page">
      <section className="checkout-card order-success-card">
        <p className="checkout-label">CHRONOS ATELIER</p>

        <div className="order-success-icon">✓</div>

        <h1>Vielen Dank!</h1>

        <p>
          Ihre Bestellung wurde erfolgreich übermittelt.
        </p>

        <div className="checkout-summary">
          <p>
            Bestellnummer: <strong>{order.id}</strong>
          </p>

          <p>
            Gesamtbetrag:{" "}
            <strong>{total.toFixed(2)} €</strong>
          </p>

          <p>
            Status: <strong>{order.status || "Eingegangen"}</strong>
          </p>
        </div>

        <div className="order-success-actions">
          <Link to="/orders" className="checkout-button">
            Meine Bestellungen
          </Link>

          <Link to="/products" className="checkout-back">
            Weiter einkaufen
          </Link>
        </div>

        <p className="checkout-note">
          Vielen Dank für Ihren Einkauf bei Chronos Atelier.
        </p>
      </section>
    </main>
  );
}

export default OrderSuccess;