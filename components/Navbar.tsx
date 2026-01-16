import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#story' },
    { name: 'Collections', href: '#collection' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`sticky top-0 w-full z-40 transition-all duration-300 border-b border-ink/10 ${
      isScrolled ? 'bg-cream/90 backdrop-blur-md py-3 shadow-sm' : 'bg-cream py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl group-hover:rotate-180 transition-transform duration-500">※</span>
          <span className="font-serif text-2xl tracking-wide font-bold">MIROVA</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm uppercase tracking-wider hover:text-ink/60 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-ink after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-ink text-cream px-4 py-2 rounded-full hover:bg-ink/90 transition-transform active:scale-95"
          >
            <ShoppingBag size={18} />
            <span className="text-sm font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="bg-cream text-ink text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="lg:hidden p-2 hover:bg-ink/5 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'max-h-[400px] border-b border-ink/10' : 'max-h-0'
      }`}>
        <ul className="flex flex-col p-6 gap-4 bg-cream">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-xl font-serif block py-2 border-b border-ink/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;