import Link from "next/link";

/*Ini bagian halaman kontak Machaé*/
export default function ContactPage() {
  return (
    <div className="contact-page">
      {/*Ini bagian pembuka halaman Contact*/}
      <section className="contact-heading">
        <p className="eyebrow">LET US CONNECT</p>

        <h1>We would love to hear from you.</h1>

        <p>
          Have a question or simply want to say hello? We would love to hear
          from you and learn what makes your Machaé moments special.
        </p>
      </section>

      {/*Ini bagian informasi dan tautan kontak*/}
      <section className="contact-content">
        <div className="contact-message">
          <p className="eyebrow">SAY HELLO</p>

          <h2>Every little note is welcome.</h2>

          <p>
            Whether you would like to know more about our menu or explore our
            creations, we are happy to welcome you to Machaé.
          </p>

          <Link href="/menu" className="primary-button">
            Explore Our Menu <span>→</span>
          </Link>
        </div>

        <div className="contact-details">
          <article className="contact-item">
            <span className="contact-number">01</span>

            <div>
              <h3>Email</h3>
              <p>Our official email address will be announced soon.</p>
              <span className="contact-placeholder">
                Contact details coming soon
              </span>
            </div>
          </article>

          <article className="contact-item">
            <span className="contact-number">02</span>

            <div>
              <h3>Social Media</h3>
              <p>Follow our updates and discover more from Machaé.</p>
              <span className="contact-placeholder">
                Social media links coming soon
              </span>
            </div>
          </article>

          <article className="contact-item">
            <span className="contact-number">03</span>

            <div>
              <h3>Our Menu</h3>
              <p>Looking for your next matcha drink or dessert?</p>

              <Link href="/menu" className="contact-inline-link">
                View Our Menu →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/*Ini bagian penutup halaman Contact*/}
      <section className="contact-footer-note">
        <h2>Thank you for stopping by.</h2>
        <p>We hope Machaé can be part of your little happy moments.</p>
      </section>
    </div>
  );
}
