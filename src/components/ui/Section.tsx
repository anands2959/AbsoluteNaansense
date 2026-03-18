import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ id, className = '', children }: SectionProps) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 ${className}`}>
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};
