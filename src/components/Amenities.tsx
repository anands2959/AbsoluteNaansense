"use client";

import { Section } from './ui/Section';
import { 
  Accessibility, 
  Truck, 
  Music, 
  Baby, 
  Leaf, 
  Heart,
  Check
} from 'lucide-react';

const amenityGroups = [
  {
    title: "Accessibility",
    icon: Accessibility,
    items: ["Wheelchair Seating", "Accessible Toilet", "Easy Entrance"],
    className: "lg:col-span-1"
  },
  {
    title: "Service",
    icon: Truck,
    items: ["Dine-in", "Takeaway", "Home Delivery", "Kerbside"],
    className: "lg:col-span-1 bg-orange/5"
  },
  {
    title: "Highlights",
    icon: Music,
    items: ["Live Music", "Premium Coffee", "Desserts", "Sports"],
    className: "lg:col-span-1"
  },
  {
    title: "Offerings",
    icon: Leaf,
    items: ["Halal", "Vegan Options", "Vegetarian", "Small Plates"],
    className: "lg:col-span-1"
  },
  {
    title: "Atmosphere",
    icon: Heart,
    items: ["Trendy", "Romantic", "Casual Dining"],
    className: "lg:col-span-1"
  },
  {
    title: "Family",
    icon: Baby,
    items: ["Kid Friendly", "High Chairs", "Kids' Menu"],
    className: "lg:col-span-1"
  }
];

export const Amenities = () => {
  return (
    <Section id="amenities" className="bg-white py-16 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-bold leading-tight mb-2">
              The <span className="text-orange italic">Details</span> Matter.
            </h2>
            <p className="text-base text-charcoal/50 font-sans leading-relaxed">
              Thoughtful touches for a seamless dining experience.
            </p>
          </div>
          <div className="hidden md:block w-20 h-px bg-charcoal/10 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
          {amenityGroups.map((group, idx) => (
            <div 
              key={idx} 
              className={`p-6 sm:p-5 rounded-2xl border border-charcoal/5 flex flex-col transition-all duration-500 hover:border-orange/20 hover:shadow-lg hover:shadow-charcoal/5 ${group.className}`}
            >
              <div className="flex items-center space-x-3 sm:space-x-2 mb-4">
                 <group.icon size={20} className="text-orange shrink-0 sm:size-4" />
                 <h3 className="font-serif text-lg sm:text-base font-bold text-charcoal truncate">
                   {group.title}
                 </h3>
              </div>
              
              <ul className="space-y-2 sm:space-y-1.5">
                {group.items.map((item, iIdx) => (
                  <li 
                    key={iIdx} 
                    className="flex items-center text-sm sm:text-[11px] font-sans font-medium text-charcoal/60 leading-tight"
                  >
                    <Check size={14} className="mr-2 sm:mr-1.5 text-orange/40 shrink-0 sm:size-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Subtle Utilities Line */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4 py-6 border-t border-charcoal/5">
           {["Free Wi-Fi", "Card Payments", "Late Night", "Reservations"].map((u, i) => (
             <span key={i} className="text-[12px] sm:text-[10px] uppercase tracking-widest font-bold text-charcoal/30 flex items-center">
               <span className="w-1 h-1 bg-orange rounded-full mr-2"></span>
               {u}
             </span>
           ))}
        </div>
      </div>
    </Section>
  );
};
