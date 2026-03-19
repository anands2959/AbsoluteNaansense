import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#141414] text-cream border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-orange/20 group-hover:border-orange transition-colors">
                <Image 
                  src="/logo.png" 
                  alt="Absolute Naansense Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-cream">
                Absolute <span className="text-orange italic"> नान - sense</span>
              </span>
            </a>
            <p className="text-cream/60 font-sans text-sm max-w-sm leading-relaxed mb-8">
              A stylish dine-in restaurant in Renukoot known for tasty food, relaxed ambiance, and a modern aesthetic environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded flex items-center justify-center text-cream hover:bg-orange hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10  rounded flex items-center justify-center text-cream hover:bg-orange hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-cream/60 hover:text-orange text-sm transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-cream/60 hover:text-orange text-sm transition-colors">Signature Menu</a></li>
              <li><a href="#gallery" className="text-cream/60 hover:text-orange text-sm transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-cream/60 hover:text-orange text-sm transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="text-cream/60 hover:text-orange text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-cream/60 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-orange font-medium">
                <span>Saturday - Sunday</span>
                <span>11:00 AM - 11:30 PM</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Absolute Naansense. All rights reserved.
          </p>
          <p className="text-cream/40 text-sm tracking-wide text-orange/50 uppercase">
            Designed for Renukoot
          </p>
        </div>
      </div>
    </footer>
  );
};
