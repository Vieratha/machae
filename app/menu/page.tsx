import MenuExplorer from "../../components/MenuExplorer";

export default function MenuPage() {
  return (
    <div className="menu-page">
      <section className="menu-heading">
        <p className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</p>
        <h1>Our Menu</h1>
        <p className="menu-description">
          Discover our selection of thoughtfully crafted matcha drinks and
          delightful desserts, made to bring joy to your day.
        </p>
      </section>

      <section className="menu-products" aria-label="Browse Machaé products">
        <MenuExplorer />
      </section>
    </div>
  );
}
