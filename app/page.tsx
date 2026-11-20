// app/page.tsx

import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <p className="eyebrow">ShipYard Marine Supply</p>
        <h1>Equipment built for open water.</h1>
        <p className="subtitle">
          Tested gear for coastal runs, offshore passages, and dockside maintenance.
        </p>
      </header>

      <section aria-label="Product catalog" className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}