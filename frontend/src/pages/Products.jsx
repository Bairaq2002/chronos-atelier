import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/productApi";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError(
          "Produkte konnten nicht geladen werden."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <main className="products-page">
        <div className="products-background">
          <section className="products-card products-status">

            <p className="products-label">
              CHRONOS ATELIER
            </p>

            <h1>Unsere Kollektion</h1>

            <div className="products-loader">
              <span></span>
            </div>

            <p>
              Unsere Uhren werden geladen...
            </p>

          </section>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="products-page">
        <div className="products-background">
          <section className="products-card products-status">

            <p className="products-label">
              CHRONOS ATELIER
            </p>

            <h1>Unsere Kollektion</h1>

            <div className="products-error">
              {error}
            </div>

          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="products-page">

      <div className="products-background">

        <section className="products-card">

          <div className="products-header">

            <p className="products-label">
              CHRONOS ATELIER
            </p>

            <h1>Unsere Kollektion</h1>

            <p className="products-description">
              Entdecken Sie unsere ausgewählte
              Kollektion eleganter Uhren für Damen
              und Herren.
            </p>

          </div>

          <div className="products-line">
            <span>
              {products.length} Modelle
            </span>

            <span>
              Zeitlose Eleganz
            </span>
          </div>

          <section className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </section>

          <div className="products-divider">
            <span>CHRONOS ATELIER</span>
          </div>

          <p className="products-footer-text">
            Exklusive Uhren für besondere Momente.
          </p>

        </section>

      </div>

    </main>
  );
}

export default Products;