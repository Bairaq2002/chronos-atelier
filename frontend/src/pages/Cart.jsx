import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();
  // Leerer Warenkorb
  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-background">
          <section className="cart-main-card cart-empty-card">
            <header className="cart-header">
              <p className="cart-label">
                CHRONOS ATELIER
              </p>
              <h1>Ihr Warenkorb</h1>
              <p className="cart-description">
                Entdecken Sie unsere exklusive
                Kollektion zeitloser Uhren.
              </p>
            </header>
            <div className="cart-empty-content">
              <div className="cart-empty-icon">
                <span>⌚</span>
              </div>
              <h2>Ihr Warenkorb ist leer</h2>
              <p>
                Ihre ausgewählten Uhren werden hier
                angezeigt, sobald Sie ein Produkt hinzufügen.
              </p>
              <Link
                to="/products"
                className="cart-primary-button"
              >
                Zur Kollektion
                <span> → </span>
              </Link>
            </div>
            <div className="cart-divider">
              <span>CHRONOS ATELIER</span>
            </div>
            <p className="cart-footer-text">
              Exklusive Uhren für besondere Momente.
            </p>
          </section>
        </div>
      </main>
    );
  }
  return (
    <main className="cart-page">
      <div className="cart-background">
        <section className="cart-main-card">
          {/* Header */}
          <header className="cart-header">
            <p className="cart-label">
              CHRONOS ATELIER
            </p>
            <h1>Ihr Warenkorb</h1>
            <p className="cart-description">
              Ihre ausgewählten Uhren und besonderen Stücke.
            </p>
          </header>
          {/* Main layout */}
          <div className="cart-layout">
            {/* Product list */}
            <section className="cart-products">
              <div className="cart-products-header">
                <span>Ihre Auswahl</span>
                <span>
                  {cartItems.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                  )}{" "}
                  Artikel
                </span>
              </div>
              {cartItems.map((item) => (
                <article
                  className="cart-product"
                  key={item.id}
                >
                  {/* Product image */}
                  <Link
                    to={`/products/${item.id}`}
                    className="cart-product-image"
                    aria-label={`${item.name} ansehen`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </Link>
                  {/* Product details */}
                  <div className="cart-product-info">
                    <span className="cart-product-category">
                      {item.category}
                    </span>
                    <h2>{item.name}</h2>
                    <p className="cart-product-description">
                      {item.description}
                    </p>
                    <span className="cart-product-price">
                      {Number(item.price).toFixed(2)} €
                    </span>
                  </div>
                  {/* Quantity and actions */}
                  <div className="cart-product-actions">
                    <div className="cart-quantity">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        aria-label={`Menge von ${item.name} reduzieren`}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        aria-label={`Menge von ${item.name} erhöhen`}
                      >
                        +
                      </button>
                    </div>
                    <strong className="cart-product-total">
                      {(
                        Number(item.price) * item.quantity
                      ).toFixed(2)}{" "}
                      €
                    </strong>
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      <span aria-hidden="true">× </span>
                      Entfernen
                    </button>
                  </div>
                </article>
              ))}
              {/* Shopping actions */}
              <div className="cart-shopping-actions">
                <Link
                  to="/products"
                  className="cart-secondary-button"
                >
                  ← Weiter einkaufen
                </Link>
                <button
                  type="button"
                  className="cart-clear-button"
                  onClick={clearCart}
                >
                  Warenkorb leeren
                </button>
              </div>
            </section>
            {/* Order summary */}
            <aside className="cart-summary">
              <div className="cart-summary-top">
                <p className="cart-summary-label">
                  CHRONOS ATELIER
                </p>
                <h2>Bestellübersicht</h2>
              </div>
              <div className="cart-summary-line">
                <span>Zwischensumme</span>
                <strong>
                  {Number(totalPrice).toFixed(2)} €
                </strong>
              </div>
              <div className="cart-summary-line">
                <span>Versand</span>
                <span className="cart-free">
                  Kostenlos
                </span>
              </div>
              <div className="cart-summary-line">
                <span>MwSt.</span>
                <span>Inklusive</span>
              </div>
              <div className="cart-summary-divider" />
              <div className="cart-total-row">
                <span>Gesamtsumme</span>
                <strong>
                  {Number(totalPrice).toFixed(2)} €
                </strong>
              </div>
              <button
                type="button"
                className="cart-checkout-button"
                onClick={() => navigate("/checkout")}
              >
                Zur Kasse
                <span aria-hidden="true"> → </span>
              </button>
              <p className="cart-secure-text">
                <span aria-hidden="true">🔒 </span>
                Sichere und geschützte Bestellung
              </p>
              <p className="cart-payment-note">
                Demo-Shop – keine echte Zahlung.
              </p>
            </aside>
          </div>
          {/* Footer decoration */}
          <div className="cart-divider">
            <span>CHRONOS ATELIER</span>
          </div>
          <p className="cart-footer-text">
            Exklusive Uhren für besondere Momente.
          </p>
        </section>
      </div>
    </main>
  );
}
export default Cart;