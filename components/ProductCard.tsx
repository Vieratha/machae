import Link from "next/link";
import type { Product } from "../data/products";

/*Ini bagian komponen kartu produk yang dapat digunakan kembali*/
export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/menu/${product.slug}`} className="product-image-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>

      <p className="product-category">{product.category}</p>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-description">{product.description}</p>

        <p className="product-price">{product.price}</p>
      </div>

      <Link href={`/menu/${product.slug}`} className="text-link">
        Discover Product →
      </Link>
    </article>
  );
}
