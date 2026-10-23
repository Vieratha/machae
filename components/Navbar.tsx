"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

//Ini bagian Navbar utama website
export default function Navbar() {
  const pathname = usePathname();

  //Ini daftar tautan nav-nya
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="navbar">
      {/*Ini bagian logo website*/}
      <Link href="/" className="navbar-brand" aria-label="Machaé Home">
        <img
          src="/logo.png"
          alt="Machaé Matcha & Dessert Kitchen"
          className="navbar-logo"
        />
      </Link>

      {/*Ini bagian nav antarhalaman*/}
      <nav className="nav-links" aria-label="Navigasi utama">
        {navLinks.map((link) => {
          //Ini mengecek halaman yang sedang aktif
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(`${link.href}/`));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
