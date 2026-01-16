import React from 'react';
import { ArrowRight } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section id="story" className="container mx-auto px-4 md:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Collage */}
        <div className="relative h-[500px] w-full max-w-[500px] mx-auto lg:mx-0">
            {/* Main Image */}
            <div className="absolute inset-0 w-3/4 h-full bg-gray-200 rounded-lg overflow-hidden z-10">
                <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" 
                    alt="Craftsman working" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Stamp */}
            <div className="absolute top-4 right-4 z-30 animate-spin-slow">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-ink/20 flex items-center justify-center bg-cream">
                    <svg viewBox="0 0 100 100" className="w-full h-full absolute animate-[spin_10s_linear_infinite]">
                        <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[10px] uppercase tracking-widest fill-ink font-medium">
                            <textPath xlinkHref="#curve">
                                A Story Worth Telling • Mirova Studio •
                            </textPath>
                        </text>
                    </svg>
                    <span className="text-xl">※</span>
                </div>
            </div>

            {/* Small Overlay 1 */}
            <div className="absolute bottom-8 -right-4 w-1/2 h-48 bg-gray-300 rounded-lg overflow-hidden z-20 border-4 border-cream shadow-xl">
                 <img 
                    src="https://images.unsplash.com/photo-1532323544230-ac8d11ca3266?auto=format&fit=crop&q=80&w=500" 
                    alt="Detail of wood texture" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Shaping Spaces With <em className="font-serif italic text-ink/70">Meaning</em> —<br />
            One Thoughtful Piece at a Time.
          </h2>
          <p className="text-ink/70 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Our philosophy is simple: every piece must serve both beauty and purpose. We collaborate with master artisans and use premium, ethically sourced materials to create furniture that feels effortless, timeless, and remarkably alive.
          </p>
          <a href="#collection" className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 hover:border-ink hover:gap-4 transition-all duration-300">
            See Details <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Story;