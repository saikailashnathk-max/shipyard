// app/components/ProductCard.tsx

import Link from "next/link";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="product-card">
      <div className="card-header">
        <span className="card-category">{product.category}</span>
        <span className={`stock-badge ${product.inStock ? "in-stock" : "out-of-stock"}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <h2 className="card-title">{product.name}</h2>
      <p className="card-tagline">{product.tagline}</p>
      <div className="card-footer">
        <span className="card-price">${product.price.toFixed(2)}</span>
        <span className="card-cta">View details →</span>
      </div>
    </Link>
  );
}