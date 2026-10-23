import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function MenuPage() {
  return (
    <div className="menu-page">
      {/*Ini bagian judul halaman Menu*/}
      <section className="menu-heading">
        <p className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</p>

        <h1>Our Menu</h1>

        <p className="menu-description">
          Discover our selection of thoughtfully crafted matcha drinks and
          delightful desserts, made to bring joy to your day.
        </p>
      </section>

      {/*Ini bagian daftar seluruh produk*/}
      <section className="menu-products">
        <div className="menu-results">
          <p>OUR COLLECTION</p>
          <span>{products.length} products</span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
