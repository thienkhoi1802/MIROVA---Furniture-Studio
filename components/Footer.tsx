import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-ink text-cream pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
               <span className="text-xl">※</span>
               <span className="font-serif text-2xl font-bold">MIROVA</span>
            </div>
            <p className="text-cream/60 text-sm max-w-xs">Quiet objects, shaped with intention. Designing the background of your life.</p>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest text-cream/40 mb-4">General</h4>
            <ul className="space-y-2 text-sm text-cream/80">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#story" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#collection" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest text-cream/40 mb-4">Services</h4>
             <ul className="space-y-2 text-sm text-cream/80">
                <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Pieces</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade Program</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-widest text-cream/40 mb-4">Stay in touch</h4>
            <h3 className="font-serif text-2xl hover:text-cream/80 cursor-pointer transition-colors">hello@mirovastudio.com</h3>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full mb-12"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5 space-y-6">
                <div>
                    <div className="text-xs text-cream/50 mb-1">Location</div>
                    <div className="font-medium">Jakarta Barat, Indonesia</div>
                </div>
                <div className="flex gap-12">
                     <div>
                        <div className="text-xs text-cream/50 mb-1">Call us</div>
                        <div className="font-medium">+62 815 4655 2150</div>
                    </div>
                     <div>
                        <div className="text-xs text-cream/50 mb-1">Open time</div>
                        <div className="font-medium">10:00 – 18:00</div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7">
                <div className="h-48 rounded-xl overflow-hidden mb-4 opacity-80 hover:opacity-100 transition-opacity relative">
                    <img src="https://images.unsplash.com/photo-1544967082-d9d3f661eb1d?auto=format&fit=crop&q=80&w=1200" alt="Studio texture" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-ink/20 mix-blend-multiply"></div>
                </div>
                <div className="flex justify-between text-xs text-cream/40">
                    <span>© 2026 MIROVA. All rights reserved</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;