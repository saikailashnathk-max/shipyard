// app/products/[id]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← Back to catalog
      </Link>

      <article className="detail-card">
        <div className="card-header">
          <span className="card-category">{product.category}</span>
          <span className={`stock-badge ${product.inStock ? "in-stock" : "out-of-stock"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <h1 className="detail-title">{product.name}</h1>
        <p className="detail-price">${product.price.toFixed(2)}</p>
        <p className="detail-description">{product.description}</p>

        <section className="specs-section">
          <h2>Key Specifications</h2>
          <ul className="specs-list">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}