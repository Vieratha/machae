"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

type CategoryFilter = "All" | "Matcha Drinks" | "Desserts";
type SortOption = "featured" | "price-low" | "price-high" | "name";

function priceToNumber(price: string) {
  return Number(price.replace(/[^\d]/g, "")) || 0;
}

export default function MenuExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const matchingProducts = products.filter((product) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${product.name} ${product.category} ${product.description} ${product.details}`
          .toLowerCase()
          .includes(normalizedQuery);

      const isDessert = product.category.toLowerCase().includes("dessert");
      const matchesCategory =
        category === "All" ||
        (category === "Desserts" && isDessert) ||
        (category === "Matcha Drinks" && !isDessert);

      return matchesQuery && matchesCategory;
    });

    if (sort === "price-low") {
      return [...matchingProducts].sort(
        (a, b) => priceToNumber(a.price) - priceToNumber(b.price),
      );
    }

    if (sort === "price-high") {
      return [...matchingProducts].sort(
        (a, b) => priceToNumber(b.price) - priceToNumber(a.price),
      );
    }

    if (sort === "name") {
      return [...matchingProducts].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
    }

    return matchingProducts;
  }, [category, query, sort]);

  const filters: CategoryFilter[] = ["All", "Matcha Drinks", "Desserts"];

  return (
    <div className="menu-explorer">
      <div className="menu-tools">
        <label className="menu-search">
          <span className="menu-search-label">Find your little treat</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search drinks, desserts..."
            aria-label="Search products"
          />
        </label>

        <label className="menu-sort">
          <span>Sort by</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </label>
      </div>

      <div className="menu-filter-row" aria-label="Product categories">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`menu-filter ${category === filter ? "selected" : ""}`}
            onClick={() => setCategory(filter)}
            aria-pressed={category === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="menu-results">
        <p>OUR COLLECTION</p>
        <span>
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
        </span>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="menu-empty-state">
          <p className="eyebrow">NOTHING FOUND JUST YET</p>
          <h2>No treats match your search.</h2>
          <p>Try another keyword or reset the filters to explore the menu.</p>
          <button
            type="button"
            className="menu-reset-button"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setSort("featured");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
