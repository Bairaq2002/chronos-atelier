import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  // =========================
  // TEST CHECKOUT
  // =========================

  const handleCheckout = () => {
    const confirmed = window.confirm(
      "Möchten Sie diese Bestellung wirklich aufgeben?"
    );

    if (!confirmed) {
      return;
    }

    window.alert(
      "Bestellung erfolgreich aufgegeben!\n\nVielen Dank für Ihren Einkauf bei Chronos Atelier."
    );

    // Warenkorb nach der Testbestellung leeren
    clearCart();
  };

  // =========================
  // EMPTY CART
  // =========================

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">

        <div className="cart-background">

          <section className="cart-card cart-empty">

            <div className="cart-header">

              <p className="cart-label">
                CHRONOS ATELIER
              </p>

              <h1>
                Ihr Warenkorb ist leer
              </h1>

              <p className="cart-description">
                Entdecken Sie unsere Kollektion und
                finden Sie Ihre perfekte Uhr.
              </p>

            </div>

            <div className="cart-empty-content">

              <div className="cart-empty-icon">
                🛒
              </div>

              <h2>
                Noch keine Produkte
              </h2>

              <p>
                Ihre ausgewählten Uhren werden hier
                angezeigt.
              </p>

              <Link
                to="/products"
                className="cart-shop-button"
              >
                Zur Kollektion
              </Link>

            </div>

            <div className="cart-divider">
              <span>
                CHRONOS ATELIER
              </span>
            </div>

            <p className="cart-footer-text">
              Exklusive Uhren für besondere Momente.
            </p>

          </section>

        </div>

      </main>
    );
  }

  // =========================
  // CART WITH PRODUCTS
  // =========================

  return (
    <main className="cart-page">

      <div className="cart-background">

        <section className="cart-card cart-container">

          {/* HEADER */}

          <div className="cart-header">

            <p className="cart-label">
              CHRONOS ATELIER
            </p>

            <h1>
              Ihr Warenkorb
            </h1>

            <p className="cart-description">
              Ihre ausgewählten Uhren.
            </p>

          </div>


          {/* CART ITEMS */}

          <div className="cart-items">

            {cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                {/* IMAGE */}

                <div className="cart-item-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>


                {/* PRODUCT INFORMATION */}

                <div className="cart-item-info">

                  <span>
                    {item.category}
                  </span>

                  <h2>
                    {item.name}
                  </h2>

                  <p>
                    {item.price.toFixed(2)} €
                  </p>

                </div>


                {/* QUANTITY */}

                <div className="cart-quantity">

                  <button
                    type="button"
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    aria-label={`Menge von ${item.name} verringern`}
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

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


                {/* ITEM TOTAL */}

                <div className="cart-item-total">

                  <strong>
                    {(item.price * item.quantity).toFixed(2)} €
                  </strong>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Entfernen
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* SUMMARY */}

          <div className="cart-summary">

            <div className="cart-total">

              <span>
                Gesamtsumme
              </span>

              <strong>
                {totalPrice.toFixed(2)} €
              </strong>

            </div>


            {/* ACTION BUTTONS */}

            <div className="cart-actions">

              <button
                type="button"
                className="clear-cart-button"
                onClick={clearCart}
              >
                Warenkorb leeren
              </button>


              <button
                type="button"
                className="checkout-button"
                onClick={handleCheckout}
              >
                Bestellung aufgeben
              </button>

            </div>

          </div>


          {/* FOOTER */}

          <div className="cart-divider">

            <span>
              CHRONOS ATELIER
            </span>

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