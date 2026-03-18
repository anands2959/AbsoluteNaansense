"use client";

import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MapPin, Phone, Clock } from 'lucide-react';

export const LocationContact = () => {
  return (
    <Section id="contact" className="bg-cream border-t border-charcoal/5">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-bold mb-6">Visit <span className="text-orange">Us</span></h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange to-gold mx-auto mb-6"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-charcoal/10 relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.634351368812!2d83.023253!3d24.20573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398eb35c150b4c81%3A0x6b77df7ed60f1c9f!2sRenukoot%2C%20Uttar%20Pradesh%20231217!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location Map"
            className="group-hover:opacity-90 transition-opacity"
          ></iframe>
        </div>
        
        <div className="order-1 lg:order-2 space-y-8 lg:pl-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
              <MapPin className="text-orange" size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">Location</h3>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                1st Floor, Malakar Plaza,<br/>
                near Nagar Panchayat,<br/>
                Renukoot, Uttar Pradesh 231217, India
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
              <Phone className="text-orange" size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">Contact</h3>
              <p className="text-charcoal/70 font-sans leading-relaxed text-lg">+91 82990 18895</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
              <Clock className="text-orange" size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">Opening Hours</h3>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                Monday - Sunday<br/>
                11:00 AM - 11:00 PM
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" onClick={() => window.location.href='tel:+918299018895'}>
              Call Now
            </Button>
            <Button variant="outline" onClick={() => window.open('https://maps.google.com/?q=Absolute+Naansense+Renukoot', '_blank')}>
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
