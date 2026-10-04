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

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-empty">
          <p className="section-label">CHRONOS ATELIER</p>

          <h1>Ihr Warenkorb ist leer</h1>

          <p>
            Entdecken Sie unsere Kollektion und
            finden Sie Ihre perfekte Uhr.
          </p>

          <Link to="/products" className="cart-shop-button">
            Zur Kollektion
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <p className="section-label">CHRONOS ATELIER</p>
          <h1>Ihr Warenkorb</h1>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="cart-item-info">
                <span>{item.category}</span>
                <h2>{item.name}</h2>

                <p>
                  {item.price.toFixed(2)} €
                </p>
              </div>

              <div className="cart-quantity">
                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                <strong>
                  {(item.price * item.quantity).toFixed(2)} €
                </strong>

                <button
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

        <div className="cart-summary">
          <div>
            <span>Gesamtsumme</span>

            <strong>
              {totalPrice.toFixed(2)} €
            </strong>
          </div>

          <button
            className="clear-cart-button"
            onClick={clearCart}
          >
            Warenkorb leeren
          </button>
        </div>
      </div>
    </main>
  );
}

export default Cart;