"use client";

import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { ReservationModal } from './ReservationModal';
import { ChevronRight, ArrowRight, ChefHat, Sparkles } from 'lucide-react';

const heroImages = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerSdRHgilcnPNh3FrBwCiFUaxzrIY3bF4-xg91_LsOnz77MUTCoCYBxNRrdXlvvpnbPdVgX7tqzmM2t7b0j9_ZHkzmLlDc1iG-gdTZrabZ674A7CsJgF11MNgWetDUTrqw9Cxa8jQ",
  "https://lh3.googleusercontent.com/p/AF1QipOgFfU4pOYlwFtGt3RlOxaCEyG0qnG4xy1-AnB5",
  "https://lh3.googleusercontent.com/p/AF1QipOwr_z19t4DNxbOoknrRC8pnkINOCY64nrKZGZw"
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

            <h1 className="font-serif text-6xl md:text-8xl lg:text-[110px] text-cream font-bold leading-[0.85] mb-12 tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Beyond <br />
              <span className="text-orange italic -ml-4 md:-ml-8 relative inline-block drop-shadow-lg">
                Dining.
              </span> <br />
              <span className="text-white relative inline-block">
                Pure <span className="text-orange italic">Solace.</span>
                <div className="absolute -bottom-2 right-0 w-32 h-1.5 bg-gold opacity-40 blur-[1px]"></div>
              </span>
            </h1>

            <div className="max-w-md mb-12 border-l border-orange/30 pl-6">
              <p className="font-sans text-base md:text-lg text-cream/70 leading-relaxed font-medium">
                Where extraordinary flavors meet aesthetic solace. <br />
                Crafting moments that turn into memories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Button size="lg" variant="primary" onClick={() => setIsModalOpen(true)} className="group rounded-full px-10 shadow-[0_20px_40px_rgba(255,122,24,0.3)]">
                Reserve a Table
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="ghost" className="text-cream hover:text-white group flex items-center bg-white/10 backdrop-blur-md rounded-full px-8 shadow-xl" onClick={() => document.getElementById('signature-menu')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore our story
                <ChevronRight size={20} className="ml-1 opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
            </div>
          </div>

          {/* Decorative Floating Element */}
          <div className="lg:w-2/5 flex flex-col items-center justify-center relative  mb-10 lg:mt-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 border border-white/30 rounded-full flex items-center justify-center relative p-8 backdrop-blur-[2px] bg-white/5 shadow-2xl">
              <div className="absolute inset-0 border-t-2 border-orange rounded-full animate-spin-slow"></div>
              <div className="text-center">
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream italic font-bold mb-2 drop-shadow-lg">Since</p>
                <p className="font-sans text-orange text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter drop-shadow-2xl">2023</p>
              </div>
            </div>

            {/* Small Floating Details - Human Centric/Scrapbook Style */}
            <div className="absolute -top-6 -right-6 w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center bg-orange/90 text-white shadow-2xl rotate-12 group hover:rotate-0 transition-transform duration-700 border-2 border-white/30 z-20 rounded-[45%_55%_50%_40%/50%_45%_55%_50%]">
              <ChefHat size={28} className="mb-1 sm:size-8 opacity-80" />
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Authentic</p>
              <p className="text-sm sm:text-base font-serif italic whitespace-nowrap">Multi-Cuisine</p>
            </div>
            
            <div className="absolute -bottom-10 -left-6 sm:-left-12 p-3 bg-[#FAF9F6] text-charcoal border border-charcoal/5 -rotate-3 shadow-2xl group hover:rotate-2 transition-all duration-700 z-20 rounded-[15px_60px_20px_45px]">
               {/* Translucent Tape Effect */}
               {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-white/40 backdrop-blur-[2px] -rotate-2 border border-white/10 shadow-sm"></div> */}
               
               <div className="flex items-center space-x-2 text-orange mb-1">
                 {/* <Sparkles size={16} className="opacity-80" /> */}
                 <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">Ambience</p>
               </div>
               <p className="text-charcoal/80 text-lg sm:text-xl font-serif italic leading-tight">Soulful Aesthetic</p>
            </div>
          </div>

        </div>
      </div>

      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
