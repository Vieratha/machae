/*Ini bagian tipe data produk Machaé*/
export type Product = {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  slug: string;
  details: string;
};

/*Ini bagian data produk Machaé*/
export const products: Product[] = [
  {
    name: "Machaé Cloud",
    category: "SIGNATURE MATCHA",
    description: "Creamy matcha with a delicate, silky finish.",
    price: "Rp28.000",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85",
    slug: "machae-cloud",
    details:
      "Our signature matcha creation, crafted for a creamy texture and a delicate, silky finish.",
  },
  {
    name: "Jade Whisper",
    category: "FRESH & LIGHT",
    description: "A refreshing matcha with a smooth, earthy taste.",
    price: "Rp30.000",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    slug: "jade-whisper",
    details:
      "A refreshing matcha creation with a smooth, earthy taste for a light and calming moment.",
  },
  {
    name: "Velvet Whisk",
    category: "MATCHA DESSERT",
    description: "A delicate dessert inspired by the richness of matcha.",
    price: "Rp35.000",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    slug: "velvet-whisk",
    details:
      "A delicate dessert inspired by the rich character of matcha, made for a little indulgence.",
  },
];
