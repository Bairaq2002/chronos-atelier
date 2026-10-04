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
        setError("Produkte konnten nicht geladen werden.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <p>Produkte werden geladen...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="products-page">
      <section className="products-header">
        <p className="section-label">CHRONOS ATELIER</p>

        <h1>Unsere Kollektion</h1>

        <p>
          Entdecken Sie unsere ausgewählte Kollektion
          eleganter Uhren für Damen und Herren.
        </p>
      </section>

      <section className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </main>
  );
}

export default Products;