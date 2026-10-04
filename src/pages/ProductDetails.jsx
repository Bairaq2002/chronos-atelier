import { useCart } from "../context/CartContext";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="not-found">
        <h1>Produkt nicht gefunden</h1>
        <Link to="/products">
          Zurück zur Kollektion
        </Link>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <div className="product-details">
        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-details-info">
          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="product-details-price">
            {product.price.toFixed(2)} €
          </p>

          <p className="product-details-description">
          {product.description}
          </p>

          <button className="add-to-cart-button"
          onClick={() => addToCart(product)}>
            In den Warenkorb
          </button>

          <Link
            to="/products"
            className="back-button"
          >
            ← Zurück zur Kollektion
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;