import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="border-t border-ink/10 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Control */}
            <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-ink/60 mb-2">Customer Stories</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">
                    Shaped by Those<br /> Who <em className="italic font-serif text-ink/70">Live</em> With It.
                </h2>
                <p className="text-ink/70 mb-8 max-w-md">
                    Each piece becomes part of a story — quietly present, deeply felt, and refined in everyday use.
                </p>
                <div className="flex gap-4">
                    <button 
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Right Card (Carousel) */}
            <div className="lg:col-span-7">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 ease-in-out transform">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Video Thumbnail Part */}
                        <div className="relative aspect-square md:aspect-auto h-full group cursor-pointer overflow-hidden">
                             <img 
                                src={activeTestimonial.videoThumb} 
                                alt={activeTestimonial.author} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                             />
                             <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-cream/20 backdrop-blur border border-white/30 flex items-center justify-center text-white">
                                    <Play fill="currentColor" size={24} className="ml-1" />
                                </div>
                             </div>
                        </div>

                        {/* Content Part */}
                        <div className="p-8 md:p-12 flex flex-col justify-between">
                            <div className="space-y-6">
                                <svg width="40" height="40" viewBox="0 0 24 24" className="text-ink/20 fill-current">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                                <blockquote className="font-serif text-xl md:text-2xl leading-relaxed">
                                    "{activeTestimonial.quote}"
                                </blockquote>
                            </div>
                            
                            <div className="mt-8 pt-8 border-t border-ink/10">
                                <div className="font-semibold text-lg">{activeTestimonial.author}</div>
                                <div className="text-ink/50 text-sm uppercase tracking-wider">{activeTestimonial.role}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;