import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemove, 
  onUpdateQuantity 
}) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-ink/10 flex items-center justify-between bg-cream">
            <h2 className="font-serif text-xl font-medium">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-ink/5 rounded-full transition-colors">
                <X size={24} />
            </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-ink/40">
                    <span className="text-4xl mb-2">※</span>
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                items.map(item => (
                    <div key={item.id} className="flex gap-4">
                        <div className="w-20 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-serif font-medium leading-tight">{item.name}</h3>
                                <p className="text-xs text-ink/50 uppercase mt-1">{item.category}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center border border-ink/20 rounded-md">
                                    <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 px-2 hover:bg-ink/5 text-xs"><Minus size={12} /></button>
                                    <span className="px-2 text-xs font-medium">{item.quantity}</span>
                                    <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 px-2 hover:bg-ink/5 text-xs"><Plus size={12} /></button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-medium text-sm">${item.price * item.quantity}</span>
                                    <button onClick={() => onRemove(item.id)} className="text-ink/40 hover:text-red-500 transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
            <div className="p-6 border-t border-ink/10 bg-cream">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-ink/60">Subtotal</span>
                    <span className="font-serif text-xl font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-ink/50 mb-6">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                </div>
                <button className="w-full bg-ink text-cream py-4 rounded-lg font-medium hover:bg-ink/90 transition-colors flex items-center justify-center gap-2">
                    Checkout <span className="opacity-60">•</span> ${subtotal}
                </button>
            </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;