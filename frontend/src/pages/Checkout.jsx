import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Checkout-Formular wurde abgesendet");
    setError("");

    if (cartItems.length === 0) {
      setError("Ihr Warenkorb ist leer.");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        {
          items: cartItems,
          totalPrice,
          shippingAddress: {
            name: form.name.trim(),
            email: form.email.trim(),
            address: form.address.trim(),
            postalCode: form.postalCode.trim(),
            city: form.city.trim(),
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      clearCart();

      navigate("/order-success", {
        state: {
          order: response.data.order,
        },
      });
    } catch (requestError) {
      console.error(
        "Bestellung fehlgeschlagen:",
        requestError
      );

      if (requestError.response?.status === 401) {
        setError(
          "Ihre Anmeldung ist abgelaufen. Bitte melden Sie sich erneut an."
        );
      } else {
        setError(
          requestError.response?.data?.message ||
            "Die Bestellung konnte nicht erstellt werden. Bitte versuchen Sie es erneut."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <section className="checkout-card">
          <p className="checkout-label">
            CHRONOS ATELIER
          </p>

          <h1>Ihr Warenkorb ist leer</h1>

          <p>
            Bitte wählen Sie zuerst eine Uhr aus.
          </p>

          <Link
            to="/products"
            className="checkout-button"
          >
            Zur Kollektion
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <section className="checkout-card">
        <header className="checkout-header">
          <p className="checkout-label">
            CHRONOS ATELIER
          </p>

          <h1>Zur Kasse</h1>

          <p>
            Bitte geben Sie Ihre Lieferdaten ein,
            um Ihre Bestellung abzuschließen.
          </p>
        </header>

        {error && (
          <div className="checkout-error" role="alert">
            {error}
          </div>
        )}

        <div className="checkout-summary">
          <h2>Ihre Bestellung</h2>

          {cartItems.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >
              <div className="checkout-item-info">
                <span>{item.name}</span>
                <small>Menge: {item.quantity}</small>
              </div>

              <strong>
                {(
                  Number(item.price) *
                  Number(item.quantity)
                ).toFixed(2)}{" "}
                €
              </strong>
            </div>
          ))}

          <div className="checkout-total">
            <span>Gesamtsumme</span>

            <strong>
              {Number(totalPrice).toFixed(2)} €
            </strong>
          </div>
        </div>

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <h2>Lieferadresse</h2>

          <label htmlFor="checkout-name">
            Vollständiger Name
          </label>

          <input
            id="checkout-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Ihr vollständiger Name"
            required
          />

          <label htmlFor="checkout-email">
            E-Mail-Adresse
          </label>

          <input
            id="checkout-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="name@example.com"
            required
          />

          <label htmlFor="checkout-address">
            Straße und Hausnummer
          </label>

          <input
            id="checkout-address"
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            autoComplete="street-address"
            placeholder="Musterstraße 10"
            required
          />

          <div className="checkout-address-row">
            <div>
              <label htmlFor="checkout-postal">
                Postleitzahl
              </label>

              <input
                id="checkout-postal"
                name="postalCode"
                type="text"
                value={form.postalCode}
                onChange={handleChange}
                autoComplete="postal-code"
                placeholder="50667"
                required
              />
            </div>

            <div>
              <label htmlFor="checkout-city">
                Stadt
              </label>

              <input
                id="checkout-city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                autoComplete="address-level2"
                placeholder="Köln"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="checkout-button"
            disabled={loading}
          >
            {loading
              ? "Bestellung wird verarbeitet..."
              : "Bestellung aufgeben"}
          </button>

          <Link
            to="/cart"
            className="checkout-back"
          >
            ← Zurück zum Warenkorb
          </Link>
        </form>

        <p className="checkout-note">
          Hinweis: Dies ist eine Demo-Bestellung.
          Es wird keine Zahlung durchgeführt.
        </p>

        <div className="checkout-divider">
          <span>CHRONOS ATELIER</span>
        </div>

        <p className="checkout-footer-text">
          Exklusive Uhren für besondere Momente.
        </p>
      </section>
    </main>
  );
}

export default Checkout;