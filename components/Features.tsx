import React from 'react';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="bg-ink text-cream py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Heading & Image */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Design Begins With You —<br />
              and Ends in <em className="italic text-cream/70">Timeless</em> Form.
            </h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden relative group">
                <img 
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200"
                    alt="Dark moody interior"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

          {/* Right: List & Content */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full pt-4 lg:pt-0">
             <p className="text-cream/70 text-sm mb-8 leading-relaxed">
                Where every material and finish is chosen not just to function but to create a living experience.
             </p>
             <a href="#collection" className="inline-flex items-center gap-2 bg-cream text-ink px-6 py-3 rounded-full self-start hover:bg-white transition-colors mb-12 font-medium">
                See Detail <ArrowRight size={18} />
             </a>

             <div className="space-y-8">
                {[
                    { title: "Craftsmanship", kicker: "Precision", desc: "Each piece begins with a human touch. Our hands craft stories into forms, balancing tradition with modern engineering." },
                    { title: "Materials", kicker: "Premium", desc: "We select only ethically sourced wood, stones, and textiles—chosen for depth, warmth, and longevity." },
                    { title: "Aesthetics", kicker: "Minimalist", desc: "Every line is intentional. Every proportion balanced. A study in restraint that simplifies into a signature of quiet luxury." }
                ].map((item, idx) => (
                    <div key={idx} className="border-l border-cream/20 pl-6 group cursor-default">
                        <div className="text-[10px] uppercase tracking-widest text-cream/50 mb-1">{item.kicker}</div>
                        <div className="font-serif text-2xl mb-2 group-hover:text-white transition-colors">{item.title}</div>
                        <p className="text-sm text-cream/60 leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;