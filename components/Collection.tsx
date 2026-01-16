import React, { useState, useMemo } from 'react';
import { Search, X, Grid3X3, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface CollectionProps {
  onAddToCart: (product: Product) => void;
}

const Collection: React.FC<CollectionProps> = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortOption === 'priceAsc') return a.price - b.price;
      if (sortOption === 'priceDesc') return b.price - a.price;
      if (sortOption === 'nameAsc') return a.name.localeCompare(b.name);
      return (a.featured === b.featured) ? 0 : a.featured ? -1 : 1; // Default featured first
    });
  }, [searchTerm, categoryFilter, sortOption]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="collection" className="container mx-auto px-4 md:px-8 py-20 md:py-32">
      
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs uppercase tracking-widest text-ink/60 mb-2 block">The Collection</span>
          <h2 className="font-serif text-4xl md:text-5xl">
            The Things We <em className="italic font-serif text-ink/70">Shape</em>.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            {/* Search */}
            <div className="relative group flex-grow md:flex-grow-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40 w-4 h-4" />
                <input 
                    type="text" 
                    placeholder="Search Products..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-64 bg-transparent border border-ink/20 rounded-lg py-2 pl-9 pr-8 text-sm focus:outline-none focus:border-ink transition-colors"
                />
                {searchTerm && (
                    <button 
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            {/* Filters */}
            <select 
                value={categoryFilter} 
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-transparent border border-ink/20 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-ink cursor-pointer"
            >
                <option value="">All Materials</option>
                <option value="Wood">Wood</option>
                <option value="Stone">Stone</option>
                <option value="Textile">Textile</option>
                <option value="Lighting">Lighting</option>
            </select>

            <select 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent border border-ink/20 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-ink cursor-pointer"
            >
                <option value="featured">Sort: Featured</option>
                <option value="priceAsc">Price: Low → High</option>
                <option value="priceDesc">Price: High → Low</option>
                <option value="nameAsc">Name: A → Z</option>
            </select>
        </div>
      </div>

      {/* Grid */}
      {visibleProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {visibleProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Quick Add Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                             <button 
                                onClick={() => onAddToCart(product)}
                                className="w-full bg-cream/90 backdrop-blur text-ink py-3 rounded-md text-sm font-medium hover:bg-white transition-colors shadow-lg"
                             >
                                Add to Cart — ${product.price}
                             </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-serif text-lg leading-tight group-hover:underline decoration-ink/30 underline-offset-4">{product.name}</h3>
                            <p className="text-xs text-ink/50 uppercase tracking-wider mt-1">{product.category}</p>
                        </div>
                        <span className="font-medium text-sm">${product.price}</span>
                    </div>
                </div>
            ))}
        </div>
      ) : (
          <div className="text-center py-20 text-ink/50">
              <p>No products found matching your criteria.</p>
          </div>
      )}

      {/* Load More */}
      {visibleCount < filteredProducts.length && (
          <div className="text-center mt-16">
              <button 
                onClick={() => setVisibleCount(prev => prev + 4)}
                className="group inline-flex items-center gap-2 text-ink/70 hover:text-ink transition-colors pb-1 border-b border-transparent hover:border-ink"
              >
                  Load More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
          </div>
      )}

    </section>
  );
};

export default Collection;