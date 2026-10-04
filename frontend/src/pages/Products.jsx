import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
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