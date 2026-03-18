"use client";
import { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ReservationModal } from './ReservationModal';

export const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Section className="bg-charcoal border-t border-white/10 relative overflow-hidden text-center py-24 md:py-32" id="cta">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-6xl text-cream font-bold mb-8 leading-tight">
          Ready for a Great Dining <span className="text-orange">Experience?</span>
        </h2>
        
        <p className="text-cream/80 font-sans text-lg mb-10 max-w-xl mx-auto">
          Join us at Absolute Naansense for a memorable meal with your loved ones. We guarantee exquisite flavors and an aesthetic vibe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
            Reserve a Table
          </Button>
          <Button variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-charcoal" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
            View Famous Dishes
          </Button>
        </div>
      </div>
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
};
