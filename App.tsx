import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import Collection from './components/Collection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans text-ink overflow-x-hidden selection:bg-ink selection:text-cream">
      {/* Top Strip */}
      <div className="bg-cream border-b border-ink/10 py-2 px-4 md:px-8 text-[10px] uppercase tracking-widest font-medium flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-3">
          <span className="hidden md:inline">Preorder your first order</span>
          <span className="w-1 h-1 bg-ink rounded-full opacity-50 hidden md:block"></span>
          <span>A new volume in living</span>
          <span className="w-1 h-1 bg-ink rounded-full opacity-50"></span>
          <span className="hidden sm:inline">Reserved for future living</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#collection" className="hover:text-ink/60 transition-colors">Shop</a>
          <span className="w-1 h-1 bg-ink rounded-full opacity-50"></span>
          <a href="#contact" className="hover:text-ink/60 transition-colors">Contact</a>
        </div>
      </div>

      <Navbar cartCount={cartTotalCount} onOpenCart={toggleCart} />
      
      <main>
        <Hero />
        <Story />
        <Features />
        <Collection onAddToCart={addToCart} />
        <Testimonials />
      </main>

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default App;