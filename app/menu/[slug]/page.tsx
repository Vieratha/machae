import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";

/*Ini bagian halaman detail produk berdasarkan slug*/
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  //Ini bagian jika produk tidak ditemukan
  if (!product) {
    notFound();
  }

  //Ini bagian rekomendasi produk selain produk yang sedang dibuka
  const relatedProducts = products.filter((item) => item.slug !== product.slug);

  return (
    <div className="product-detail-page">
      {/*Ini bagian navigasi halaman*/}
      <div className="detail-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/menu">Menu</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      {/*Ini bagian informasi utama produk*/}
      <section className="product-detail">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-content">
          <p className="eyebrow">{product.category}</p>

          <h1>{product.name}</h1>

          <div className="detail-price">
            <p>Price</p>
            <h2>{product.price}</h2>
          </div>

          {/*Ini bagian deskripsi lengkap produk*/}
          <div className="detail-about">
            <h2>About This Creation</h2>
            <p>{product.details}</p>
          </div>

          {/*Ini bagian tombol pembelian dummy*/}
          <button
            type="button"
            className="detail-cart-button"
            disabled
            title="Fitur pembelian belum tersedia"
          >
            Add to Bag — Coming Soon
          </button>

          <p className="detail-note">
            Online ordering is coming soon. Thank you for your interest in
            Machaé.
          </p>

          <Link href="/menu" className="detail-back-link">
            ← Explore Other Products
          </Link>
        </div>
      </section>

      {/*Ini bagian rekomendasi produk lainnya*/}
      <section className="related-section">
        <div className="related-heading">
          <p className="eyebrow">A LITTLE MORE TO LOVE</p>
          <h2>You May Also Like</h2>
          <p>Discover more creations from Machaé.</p>
        </div>

        <div className="related-grid">
          {relatedProducts.map((item) => (
            <Link
              href={`/menu/${item.slug}`}
              className="related-card"
              key={item.slug}
            >
              <div className="related-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="related-info">
                <p>{item.category}</p>
                <h3>{item.name}</h3>

                <div className="related-price-row">
                  <span>{item.price}</span>
                  <span>View Product →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
