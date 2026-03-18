"use client";

import { Section } from './ui/Section';
import { Utensils, Sparkles, Users, Star } from 'lucide-react';

const FeatureCard = ({ number, title, description, icon: Icon, className = "" }: any) => (
  <div className={`relative ${className} group`}>
    <div className="absolute -top-10 -left-6 font-serif text-[80px] text-charcoal/[0.03] font-black italic select-none pointer-events-none group-hover:text-orange/[0.05] transition-colors duration-700">
      {number}
    </div>
    <div className="relative z-10 bg-transparent p-8 rounded-[32px] border border-charcoal/5 group-hover:bg-charcoal group-hover:border-charcoal group-hover:shadow-xl group-hover:shadow-charcoal/10 transition-all duration-700">
      <div className="w-12 h-12 flex items-center justify-center text-orange mb-6 group-hover:text-white transition-all duration-500">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl font-bold text-charcoal mb-3 group-hover:text-cream transition-colors duration-500">{title}</h3>
      <p className="text-charcoal/60 font-sans text-sm leading-relaxed group-hover:text-cream/60 transition-colors duration-500">{description}</p>
    </div>
  </div>
);

export const Features = () => {
  return (
    <Section id="features" className="bg-[#FAF9F6] py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
          <div className="lg:w-2/5 relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange/5 rounded-full blur-3xl animate-pulse"></div>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal font-bold leading-[1] relative z-10">
              Why <br />
              <span className="text-orange italic ml-8 block">Absolute</span>
              <span className="text-orange italic ml-16 block mt-1">Naansense?</span>
            </h2>
            <p className="mt-8 text-lg text-charcoal/60 font-sans max-w-sm leading-relaxed">
              We believe dining is an art form. Every detail is a deliberate stroke, creating an atmosphere that resonates with the soul.
            </p>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-16 relative">
            <FeatureCard
              number="01"
              title="Exquisite Cuisine"
              description="A masterclass in flavor, blending local heritage with modern gastronomy."
              icon={Utensils}
              className="md:translate-y-8"
            />
            <FeatureCard
              number="02"
              title="Curation"
              description="Not just a restaurant, but a carefully curated environment for life's best moments."
              icon={Sparkles}
            />
            <FeatureCard
              number="03"
              title="Connection"
              description="Designed to foster deep conversations and lasting memories with loved ones."
              icon={Users}
              className="md:-translate-y-8"
            />
            <FeatureCard
              number="04"
              title="Excellence"
              description="An uncompromising commitment to quality that defines the Renukoot dining scene."
              icon={Star}
            />
          </div>
        </div>

        {/* Compact Dynamic Image Layering */}
        <div className="relative h-[400px] hidden lg:block">
          <div className="absolute top-0 left-[5%] w-[35%] h-[300px] rounded-[40px] overflow-hidden rotate-[-2deg] shadow-xl z-20 hover:rotate-0 transition-transform duration-700">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000" className="w-full h-full object-cover" alt="Interior" />
          </div>
          <div className="absolute bottom-0 right-[15%] w-[40%] h-[320px] rounded-[40px] overflow-hidden rotate-[3deg] shadow-xl z-10 hover:rotate-0 transition-transform duration-700">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000" className="w-full h-full object-cover" alt="Table Setting" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange text-white rounded-full flex items-center justify-center font-serif text-lg font-bold italic shadow-xl z-30 animate-spin-slow border-4 border-white/20">
            Est. 2023
          </div>
        </div>
      </div>
    </Section>
  );
};
