"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto";
      }, 800); // Match internal animation duration
    }, 2500); // Stay for 2.5s

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal overflow-hidden transition-all duration-700 ${
        fadeOut ? "animate-preloader-out" : ""
      }`}
    >
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 animate-pulse-gentle">
          <div className="absolute inset-0 rounded-full border border-orange/20 animate-spin-slow" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-orange/40 p-1">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* Brand Name */}
        <div className="relative overflow-hidden text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-cream tracking-tight mb-2">
            Absolute <span className="text-orange italic">नान - sense</span>
          </h1>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange to-transparent animate-reveal" />
        </div>

        {/* Subtitle */}
        <p className="mt-4 font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-cream/40 animate-fade-in">
          Premium Dining Experience
        </p>
      </div>

      {/* Progress Indicator (Subtle) */}
      {/* <div className="absolute bottom-12 w-48 h-[1px] bg-white/10 overflow-hidden">
        <div className="h-full bg-orange animate-reveal" />
      </div> */}
    </div>
  );
};
