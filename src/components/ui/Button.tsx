import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-sm font-sans font-medium transition-all duration-300 ease-out active:scale-95";
  
  const variants = {
    primary: "bg-orange text-white hover:bg-[#FF8C33] shadow-lg hover:shadow-orange/30",
    secondary: "bg-charcoal text-white hover:bg-[#2A2A2A] shadow-md",
    outline: "border border-gold text-gold hover:bg-gold hover:text-charcoal",
    ghost: "text-cream hover:text-orange hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};
