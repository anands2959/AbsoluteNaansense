"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { ReservationModal } from './ReservationModal';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-orange/30 group-hover:border-orange transition-colors">
            <Image 
              src="/logo.png" 
              alt="Absolute Naansense Logo" 
              fill
              className="object-cover"
            />
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-cream">
            Absolute <span className="text-orange italic">नान - sense</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-sans tracking-widest uppercase text-cream/80 hover:text-orange transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="sm" className="hidden lg:inline-flex" onClick={() => setIsModalOpen(true)}>
            Reserve Table
          </Button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center space-x-4">
          <a href="tel:+918299018895" className="text-orange p-2">
            <Phone size={20} />
          </a>
          <button className="text-cream p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-charcoal border-t border-white/10 shadow-xl">
          <ul className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-cream hover:text-orange font-sans tracking-wider uppercase text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <Button variant="primary" className="w-full" onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}>
                Reserve Table
              </Button>
            </li>
          </ul>
        </div>
      )}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};
