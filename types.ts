export interface Product {
  id: number;
  name: string;
  category: 'Wood' | 'Stone' | 'Textile' | 'Lighting';
  price: number;
  image: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  role: string;
  videoThumb: string;
}
