import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <span className="product-price">
            {product.price.toFixed(2)} €
          </span>

          <Link
            to={`/products/${product.id}`}
            className="product-button"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;