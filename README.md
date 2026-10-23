# Machaé

Machaé adalah website untuk brand matcha dan dessert yang dibuat sebagai project praktikum Front-End Programming. Website ini dibangun menggunakan Next.js App Router, React, TypeScript, dan CSS.

## Fitur

- Halaman Home, About, Menu, Contact, dan detail produk.
- _Dynamic routing_ untuk halaman detail produk melalui route `/menu/[slug]`.
- Komponen yang dapat digunakan kembali, yaitu `Navbar`, `Footer`, dan `ProductCard`.
- Navigasi internal menggunakan `Link` dari `next/link`.
- Penanda tautan aktif pada navigasi menggunakan `usePathname`.
- Tata letak responsif untuk berbagai ukuran layar.
- Data produk dikelola terpusat di `data/products.ts`.

## Halaman

| Halaman       | Route          | Keterangan                       |
| ------------- | -------------- | -------------------------------- |
| Home          | `/`            | Halaman utama Machaé             |
| About         | `/about`       | Informasi tentang Machaé         |
| Menu          | `/menu`        | Daftar produk matcha dan dessert |
| Detail Produk | `/menu/[slug]` | Detail produk berdasarkan slug   |
| Contact       | `/contact`     | Informasi kontak                 |

Slug produk yang tersedia:

- `machae-cloud` — Machaé Cloud
- `jade-whisper` — Jade Whisper
- `velvet-whisk` — Velvet Whisk

## Teknologi

- [Next.js](https://nextjs.org/) — framework React dan sistem routing.
- [React](https://react.dev/) — pembangunan antarmuka pengguna.
- [TypeScript](https://www.typescriptlang.org/) — JavaScript dengan dukungan tipe data.
- CSS — pengaturan tampilan dan desain responsif.
- ESLint — pemeriksaan kode.

## Struktur Folder

```text
machae/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── menu/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── data/
│   └── products.ts
├── public/
│   └── logo.png
├── package.json
└── README.md
```

## Cara Menjalankan Project

Pastikan Node.js dan npm sudah terpasang. Buka terminal di folder project `machae`, kemudian jalankan perintah berikut.

1. Instal dependensi:

   ```bash
   npm install
   ```

2. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

3. Buka [http://localhost:3000](http://localhost:3000) di browser.
   Pada Windows PowerShell, jika perintah `npm` tidak berjalan seperti yang diharapkan, gunakan `npm.cmd` sebagai penggantinya, misalnya `npm.cmd run dev`.

## Catatan

Machaé merupakan project praktikum akademik dengan konsep website brand matcha dan dessert.
