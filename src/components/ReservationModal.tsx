"use client";

import { useState, useEffect } from 'react';
import { X, Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
  });

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset after closing
      setTimeout(() => setStep(1), 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white/10 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal transition-colors z-10"
        >
          <X size={24} />
        </button>

        {step === 1 ? (
          <div className="p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold mb-2">Reserve a <span className="text-orange">Table</span></h2>
            <p className="text-charcoal/60 font-sans text-sm mb-8">Secure your spot for an unforgettable dining experience at Absolute Naansense.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Pooja"
                    className="w-full bg-cream/50 border border-charcoal/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all font-sans text-charcoal"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-cream/50 border border-charcoal/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all font-sans text-charcoal"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">
                    <Users size={14} className="mr-1" /> Guests
                  </label>
                  <select
                    className="w-full bg-cream/50 border border-charcoal/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all font-sans text-charcoal appearance-none cursor-pointer"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Persons</option>)}
                    <option value="9+">9+ Persons</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">
                    <Calendar size={14} className="mr-1" /> Date
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full bg-cream/50 border border-charcoal/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all font-sans text-charcoal cursor-pointer"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">
                  <Clock size={14} className="mr-1" /> Preferred Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['18:00', '19:00', '20:00', '21:00'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: t })}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${formData.time === t ? 'bg-orange text-white shadow-md shadow-orange/30' : 'bg-cream text-charcoal/60 hover:bg-orange/10'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="w-full mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
              </Button>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center flex flex-col items-center justify-center animate-slide-up">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="font-serif text-3xl text-charcoal font-bold mb-4 text-center">Reservation <span className="text-orange">Confirmed!</span></h2>
            <p className="text-charcoal/60 font-sans text-center mb-10 leading-relaxed px-4">
              Thank you, <span className="font-bold text-charcoal">{formData.name}</span>. We've reserved a table for <span className="font-bold text-charcoal">{formData.guests}</span> guests on <span className="font-bold text-charcoal">{formData.date}</span> at <span className="font-bold text-charcoal">{formData.time}</span>.
            </p>
            <Button variant="secondary" size="lg" onClick={onClose} className="w-full">
              Close Window
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
