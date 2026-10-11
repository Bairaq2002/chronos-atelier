import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Orders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login", { replace: true });
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/api/orders/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(
          Array.isArray(response.data) ? response.data : []
        );
      } catch (requestError) {
        console.error("Fehler beim Laden der Bestellungen:", requestError);

        if (requestError.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("isAuthenticated");

          navigate("/login", { replace: true });
          return;
        }

        setError(
          requestError.response?.data?.message ||
            "Bestellungen konnten nicht geladen werden."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const formatPrice = (price) =>
    Number(price || 0).toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });

  const formatDate = (date) => {
    if (!date) return "Kein Datum verfügbar";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Kein Datum verfügbar";
    }

    return parsedDate.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <main className="orders-page">
      <div className="orders-background">
        <section className="orders-card">
          <header className="orders-header">
            <p className="orders-label">CHRONOS ATELIER</p>

            <h1>Meine Bestellungen</h1>

            <p className="orders-description">
              Alle Ihre Bestellungen und ausgewählten Uhren
              auf einen Blick.
            </p>
          </header>

          {loading && (
            <div className="empty-orders">
              <div className="orders-icon">◌</div>
              <h2>Bestellungen werden geladen...</h2>
              <p>Bitte warten Sie einen Moment.</p>
            </div>
          )}

          {!loading && error && (
            <div className="empty-orders" role="alert">
              <div className="orders-icon">!</div>
              <h2>Bestellungen nicht verfügbar</h2>
              <p>{error}</p>

              <button
                type="button"
                className="orders-button"
                onClick={() => window.location.reload()}
              >
                Erneut versuchen
              </button>
            </div>
          )}

          {!loading && !error && orders.length === 0 && (
            <div className="empty-orders">
              <div className="orders-icon">✓</div>

              <h2>Noch keine Bestellungen</h2>

              <p>
                Sobald Sie eine Bestellung aufgegeben haben,
                wird sie hier angezeigt.
              </p>

              <Link to="/products" className="orders-button">
                Zur Kollektion
              </Link>
            </div>
          )}

          {!loading && !error && orders.length > 0 && (
            <div className="orders-list">
              <div className="orders-count">
                {orders.length}{" "}
                {orders.length === 1
                  ? "Bestellung"
                  : "Bestellungen"}
              </div>

              {orders.map((order) => (
                <article className="order-item" key={order.id}>
                  <div className="order-item-header">
                    <div>
                      <span className="order-small-label">
                        BESTELLNUMMER
                      </span>

                      <h2>#{order.id}</h2>
                    </div>

                    <span className="order-status">
                      {order.status || "Bestellung eingegangen"}
                    </span>
                  </div>

                  <p className="order-date">
                    Bestellt am: {formatDate(order.createdAt)}
                  </p>

                  <div className="order-products">
                    {(order.items || []).map((item, index) => (
                      <div
                        className="order-product"
                        key={`${order.id}-${item.productId}-${index}`}
                      >
                        <div className="order-product-image">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                            />
                          ) : (
                            <span>CA</span>
                          )}
                        </div>

                        <div className="order-product-info">
                          <h3>{item.name}</h3>

                          <p>
                            Menge: {item.quantity}
                          </p>

                          <span>
                            {formatPrice(item.price)} pro Stück
                          </span>
                        </div>

                        <strong className="order-product-total">
                          {formatPrice(
                            Number(item.price) *
                              Number(item.quantity)
                          )}
                        </strong>
                      </div>
                    ))}
                  </div>

                  <div className="order-total">
                    <span>Gesamtsumme</span>

                    <strong>
                      {formatPrice(order.totalPrice)}
                    </strong>
                  </div>
                </article>
              ))}

              <Link
                to="/products"
                className="orders-button"
              >
                Weitere Uhren entdecken
              </Link>
            </div>
          )}

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