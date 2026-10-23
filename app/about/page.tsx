import Link from "next/link";

/*Ini bagian halaman pengenalan Machaé*/
export default function AboutPage() {
  return (
    <div className="about-page">
      {/*Ini bagian pembuka halaman About*/}
      <section className="about-hero">
        <p className="eyebrow">OUR STORY</p>

        <h1>A little care in every creation.</h1>

        <p>
          Machaé is a matcha and dessert kitchen inspired by the beauty of
          simple moments, thoughtful ingredients, and little everyday treats.
        </p>
      </section>

      {/*Ini bagian cerita dan filosofi brand*/}
      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1000&q=85"
            alt="A cup of matcha prepared with care"
          />
        </div>

        <div className="about-story-content">
          <p className="eyebrow">THE IDEA BEHIND MACHAÉ</p>

          <h2>Made for your little pauses.</h2>

          <p>
            We believe a drink or a dessert can be more than something to enjoy.
            It can be a small pause in a busy day, a quiet moment to recharge,
            or a sweet way to spend time with someone.
          </p>

          <p>
            That is the feeling we want Machaé to bring to every visit:
            comforting matcha, delightful desserts, and a welcoming experience
            worth returning to.
          </p>

          <Link href="/menu" className="primary-button">
            Discover Our Menu <span>→</span>
          </Link>
        </div>
      </section>

      {/*Ini bagian nilai yang diusung Machaé*/}
      <section className="about-values">
        <div className="about-values-heading">
          <p className="eyebrow">WHAT MATTERS TO US</p>
          <h2>Simple things, thoughtfully made.</h2>
        </div>

        <div className="values-grid">
          <article className="value-card">
            <span>01</span>
            <h3>Thoughtful Creations</h3>
            <p>
              Every item is imagined to offer a delightful balance of flavor,
              texture, and comfort.
            </p>
          </article>

          <article className="value-card">
            <span>02</span>
            <h3>Everyday Moments</h3>
            <p>
              We celebrate small routines and the little treats that make
              ordinary days feel special.
            </p>
          </article>

          <article className="value-card">
            <span>03</span>
            <h3>A Warm Experience</h3>
            <p>
              From choosing a drink to enjoying dessert, we want every moment
              with Machaé to feel welcoming.
            </p>
          </article>
        </div>
      </section>

      {/*Ini bagian ajakan melihat koleksi produk*/}
      <section className="about-cta">
        <p className="eyebrow">YOUR NEXT LITTLE TREAT</p>
        <h2>Find something lovely.</h2>

        <Link href="/menu" className="text-link">
          Explore the Collection →
        </Link>
      </section>
    </div>
  );
}
