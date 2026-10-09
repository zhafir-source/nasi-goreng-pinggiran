export type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    price: 18000,
    category: "Spesial",
    image: "/images/menu/nasi-goreng-spesial.jpg",
    description:
      "Nasi goreng dengan bumbu khas dan perpaduan rasa gurih yang menggugah selera.",
  },
  {
    id: 2,
    name: "Nasi Goreng Pedas",
    price: 17000,
    category: "Pedas",
    image: "/images/menu/nasi-goreng-pedas.jpg",
    description:
      "Nasi goreng berbumbu pedas untuk kamu yang suka sensasi panas dan nikmat.",
  },
  {
    id: 3,
    name: "Nasi Goreng Seafood",
    price: 22000,
    category: "Seafood",
    image: "/images/menu/nasi-goreng-seafood.jpg",
    description:
      "Nasi goreng gurih dengan cita rasa seafood yang khas.",
  },
  {
    id: 4,
    name: "Nasi Goreng Ayam",
    price: 16000,
    category: "Ayam",
    image: "/images/menu/nasi-goreng-ayam.jpg",
    description:
      "Nasi goreng berbumbu pilihan dengan rasa gurih yang cocok dinikmati kapan saja.",
  },
  {
    id: 5,
    name: "Nasi Goreng Vegetarian",
    price: 15000,
    category: "Vegetarian",
    image: "/images/menu/nasi-goreng-vegetarian.jpg",
    description:
      "Pilihan nasi goreng tanpa daging dengan cita rasa lezat dan sederhana.",
  },
];