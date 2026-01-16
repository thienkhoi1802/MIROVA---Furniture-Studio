import React from 'react';
import { ArrowDown, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header id="home" className="container mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Typography */}
        <div className="lg:col-span-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6">
            <span className="block">Where <em className="font-light italic text-ink/70">Silence</em> Shapes</span>
            <span className="block pl-4 md:pl-12">the — Finest Forms.</span>
          </h1>
        </div>

        {/* Right: Copy & Badges */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right mt-4 lg:mt-2">
          <p className="text-ink/70 text-sm md:text-base max-w-xs leading-relaxed mb-6">
            True luxury never raises its voice. Every curve, every joint is considered with precision and restraint, resulting in furniture that feels quietly inevitable.
          </p>
          <div className="flex items-center gap-3 text-xs font-medium tracking-wide uppercase">
            <span className="border border-ink/20 px-3 py-1 rounded-full">© 2026</span>
            <span className="border border-ink/20 px-3 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck size={14} /> Trusted by creators
            </span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative mt-12 group">
        <div className="w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden relative">
           <img 
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern living room with minimal furniture" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Hotspot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
            <button className="relative w-8 h-8 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
            </button>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur text-ink text-xs py-2 px-4 rounded shadow-lg whitespace-nowrap pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-300">
                Linen Lounge Sofa
            </div>
        </div>

        {/* Meta Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-widest uppercase text-ink/60 mt-4 gap-2">
          <span>MIROVA — THE STUDIO STORY</span>
          <span className="hidden md:flex items-center gap-2 animate-bounce">
            Scroll to explore <ArrowDown size={12} />
          </span>
          <span>JAKARTA / BALI / REMOTE</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;