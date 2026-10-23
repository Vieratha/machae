import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      {/*Ini bagian hero atau tampilan utama halaman Home*/}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">MATCHA & DESSERT KITCHEN</p>

          <h1>
            A little matcha,
            <br />a lot of <em>happiness.</em>
          </h1>

          <p className="hero-description">
            Thoughtfully crafted matcha and delightful desserts to make your
            everyday moments a little more special.
          </p>

          <Link href="/menu" className="primary-button">
            Explore Our Menu <span>→</span>
          </Link>
        </div>

        <div className="hero-visual">
          <img src={products[0].image} alt="Machaé signature matcha drink" />
        </div>
      </section>

      {/*Ini bagian pengenalan filosofi Machaé*/}
      <section className="intro-section">
        <p className="eyebrow">OUR PHILOSOPHY</p>

        <h2>
          Little moments,
          <br />
          made more delightful.
        </h2>

        <p className="intro-description">
          From comforting matcha drinks to delicate desserts, every creation is
          made to bring a little joy to your day.
        </p>

        <Link href="/about" className="text-link">
          Discover Our Story →
        </Link>
      </section>

      {/*Ini bagian daftar produk unggulan Machaé*/}
      <section className="products-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A TASTE OF MACHAÉ</p>
            <h2>Our Signature Collection</h2>
          </div>

          <Link href="/menu" className="text-link">
            Explore Our Menu →
          </Link>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/*Ini bagian penutup halaman Home*/}
      <section className="closing-section">
        <p className="eyebrow">STAY A LITTLE LONGER</p>

        <h2>
          Let’s make your day
          <br />a little more <em>special.</em>
        </h2>

        <Link href="/contact" className="closing-link">
          Get in Touch →
        </Link>
      </section>
    </>
  );
}
