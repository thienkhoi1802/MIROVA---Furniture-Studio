import { Product, TestimonialData } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "The Sculptor's Chair",
    category: "Wood",
    price: 850,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    id: 2,
    name: "Basalt Side Table",
    category: "Stone",
    price: 420,
    image: "https://images.unsplash.com/photo-1634712282287-14ed57ef9d18?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    id: 3,
    name: "Linen Lounge Sofa",
    category: "Textile",
    price: 2200,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    id: 4,
    name: "Oak Dining Bench",
    category: "Wood",
    price: 680,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    name: "Marble Console",
    category: "Stone",
    price: 1150,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 6,
    name: "Woven Floor Lamp",
    category: "Lighting",
    price: 340,
    image: "https://images.unsplash.com/photo-1513506003013-1b6a515ce9d5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 7,
    name: "Ash Wood Stool",
    category: "Wood",
    price: 190,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 8,
    name: "Velvet Accent Chair",
    category: "Textile",
    price: 780,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000"
  }
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: 1,
    quote: "The form, the texture, the weight — everything feels intentional. It brings warmth to the space.",
    author: "Calvin Komar",
    role: "Homeowner",
    videoThumb: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    quote: "I was drawn to the shapes, but I stayed for the comfort. A perfect balance of art and function.",
    author: "Scarlet Ryle",
    role: "Creative Director",
    videoThumb: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    quote: "The details reveal themselves slowly. After weeks, it still feels new.",
    author: "Minho Park",
    role: "Architect",
    videoThumb: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800"
  }
];