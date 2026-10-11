import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);
  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");
        setProduct(null);
        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error("Fehler beim Laden des Produkts:", err);
        setError("Das Produkt konnte nicht geladen werden.");
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);
  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setAdded(true);
    // Der Button kehrt nach kurzer Zeit zum Ausgangszustand zurück.
    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  };
  if (loading) {
    return (
      <main className="product-details-page">
        <div className="product-details-background">
          <section className="product-details-card product-details-status">
            <p className="product-details-eyebrow">
              CHRONOS ATELIER
            </p>
            <h1>Unsere Uhr wird geladen...</h1>
            <div className="product-details-loader" />
          </section>
        </div>
      </main>
    );
  }
  if (error || !product) {
    return (
      <main className="product-details-page">
        <div className="product-details-background">
          <section className="product-details-card product-details-status">
            <p className="product-details-eyebrow">
              CHRONOS ATELIER
            </p>
            <h1>Produkt nicht gefunden</h1>
            <p>
              {error || "Dieses Produkt ist leider nicht verfügbar."}
            </p>
            <Link
              to="/products"
              className="product-back-link"
            >
              ← Zurück zur Kollektion
            </Link>
          </section>
        </div>
      </main>
    );
  }
  return (
    <main className="product-details-page">
      <div className="product-details-background">
        <section className="product-details-card">
          <div className="product-details-layout">
            <div className="product-details-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-details-image"
              />
              <span className="product-image-caption">
                CHRONOS ATELIER
              </span>
            </div>
            <div className="product-details-content">
              <p className="product-details-eyebrow">
                CHRONOS ATELIER
              </p>
              <span className="product-details-category">
                {product.category}
              </span>
              <h1 className="product-details-title">
                {product.name}
              </h1>
              <div className="product-details-divider" />
              <p className="product-details-description">
                {product.description}
              </p>
              <p className="product-details-quality">
                Zeitloses Design. Eleganter Stil.
                Für besondere Momente.
              </p>
              <div className="product-details-price">
                {Number(product.price).toFixed(2)} €
              </div>
              <button
                type="button"
                className="details-cart-button"
                onClick={handleAddToCart}
              >
                <span>
                  {added ? "Zum Warenkorb hinzugefügt ✓" : "In den Warenkorb"}
                </span>
                {!added && (
                  <span className="cart-arrow">→</span>
                )}
              </button>
              <Link
                to="/products"
                className="product-back-link"
              >
                ← Zurück zur Kollektion
              </Link>
              <div className="product-details-note">
                <span>✦</span>
                <p>Exklusive Uhren für besondere Momente.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default ProductDetails;