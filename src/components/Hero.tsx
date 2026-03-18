"use client";

import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { ReservationModal } from './ReservationModal';
import { ChevronRight, ArrowRight } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670",
  "https://images.unsplash.com/photo-1517248135467-4c7ed9d42c77?q=80&w=2670",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2670"
];

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-charcoal pt-20">
      {/* Background Image Slider - Increased Light and Visibility */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentImageIndex ? 'opacity-70' : 'opacity-0'
              }`}
          >
            <img
              src={src}
              alt={`Restaurant Ambience ${index + 1}`}
              className="w-full h-full object-cover scale-105 brightness-110 contrast-110"
            />
          </div>
        ))}
        {/* Softer, more transparent overlays for 'Light' effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-white/5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Main Narrative - Enhanced Readability for Lighter Background */}
          <div className="lg:w-3/5 text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2  text-orange font-sans font-bold text-xs uppercase tracking-[0.2em] mb-8">
              
              <span>In Renukoot</span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] text-cream font-bold leading-[0.9] mb-12 tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Beyond <br />
              <span className="text-orange italic -ml-4 md:-ml-8 relative inline-block drop-shadow-lg">
                Dining.
                <div className="absolute -bottom-2 right-0 w-24 h-1 bg-gold opacity-60"></div>
              </span>
            </h1>

            <div className="bg-charcoal/30 backdrop-blur-[2px] p-4 -ml-4 rounded-2xl inline-block mb-12 border border-white/5">
              <p className="font-sans text-xl md:text-2xl text-cream max-w-xl leading-relaxed drop-shadow-md">
                Experience a journey of extraordinary flavors and aesthetic solace.
                Absolute Naansense is where moments turn into memories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Button size="xl" variant="primary" onClick={() => setIsModalOpen(true)} className="group rounded-full px-10 shadow-[0_20px_40px_rgba(255,122,24,0.3)]">
                Reserve a Table
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="ghost" className="text-cream hover:text-white group flex items-center bg-white/10 backdrop-blur-md rounded-full px-8 shadow-xl" onClick={() => document.getElementById('signature-menu')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore our story
                <ChevronRight size={20} className="ml-1 opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
            </div>
          </div>

          {/* Decorative Floating Element */}
          <div className="lg:w-2/5 flex flex-col items-center justify-center relative">
            <div className="w-64 h-64 md:w-80 md:h-80 border border-white/30 rounded-full flex items-center justify-center relative p-8 backdrop-blur-[2px] bg-white/5 shadow-2xl">
              <div className="absolute inset-0 border-t-2 border-orange rounded-full animate-spin-slow"></div>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl text-cream italic font-bold mb-2 drop-shadow-lg">Since</p>
                <p className="font-sans text-orange text-5xl md:text-6xl font-black italic tracking-tighter drop-shadow-2xl">2023</p>
              </div>
            </div>

            {/* Small Floating Details */}
            <div className="absolute top-0 right-0 p-5 border border-white/20 bg-charcoal/60 backdrop-blur-xl rounded-2xl -rotate-12 translate-y-[-20%] shadow-2xl">
              <p className="text-[11px] text-gold uppercase tracking-[0.2em] font-bold">Authentic</p>
              <p className="text-cream text-lg font-serif italic">Multi-Cuisine</p>
            </div>
            <div className="absolute bottom-10 left-[-20px] p-5 border border-white/20 bg-charcoal/60 backdrop-blur-xl rounded-2xl rotate-6 shadow-2xl">
              <p className="text-[11px] text-gold uppercase tracking-[0.2em] font-bold">Ambience</p>
              <p className="text-cream text-lg font-serif italic">Soulful Aesthetic</p>
            </div>
          </div>

        </div>
      </div>

      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
