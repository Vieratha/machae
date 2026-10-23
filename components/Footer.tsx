import Link from "next/link";

//Ini bagian Footer yang digunakan pada seluruh halaman
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/*Ini bagian identitas Machaé*/}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Machaé
          </Link>

          <p className="footer-tagline">Matcha & Dessert Kitchen</p>

          <p className="footer-description">
            A little sweetness for your everyday moments.
          </p>
        </div>

        {/*Ini bagian tautan halaman*/}
        <div className="footer-navigation">
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/menu">Our Menu</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/*Ini bagian informasi kontak*/}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>We would love to hear from you.</p>
          <Link href="/contact" className="footer-contact-link">
            Contact Us →
          </Link>
        </div>
      </div>

      {/*Ini bagian informasi copyright aja*/}
      <div className="footer-bottom">
        <p>© 2026 Machaé. All rights reserved.</p>
        <p>Made with care, served with love.</p>
      </div>
    </footer>
  );
}
