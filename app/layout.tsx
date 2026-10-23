import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//Ini bagian informasi website pada browser dan mesin pencari
export const metadata: Metadata = {
  title: "Machaé | Matcha & Dessert Kitchen",
  description:
    "Discover thoughtfully crafted matcha drinks and delightful desserts at Machaé.",
};

//Ini bagian layout utama yang digunakan semua halaman
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
