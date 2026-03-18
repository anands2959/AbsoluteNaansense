import { Section } from './ui/Section';
import { Button } from './ui/Button';

const dishes = [
  {
    name: 'Mutton Biryani',
    description: 'Slow-cooked aromatic basmati rice with tender mutton pieces and secret spices.',
    price: '₹550',
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Tandoori Chicken',
    description: 'Juicy chicken marinated in yogurt and traditional spices, roasted to perfection in a clay oven.',
    price: '₹480',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Chilli Mushroom',
    description: 'Crispy fried mushrooms tossed in a spicy, tangy, and sweet chili sauce.',
    price: '₹320',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Fresh Mojitos',
    description: 'Refreshing blend of mint, lime, and soda to perfectly complement your meal.',
    price: '₹220',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Chocolate Shake',
    description: 'Rich, creamy chocolate milkshake topped with whipped cream and cocoa dust.',
    price: '₹250',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Classic Indian Drink',
    description: 'Assortment of freshly baked naan, roti, and parathas straight from the tandoor.',
    price: '₹80',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNkXYZkf_AHv9CyDBSbeu2Xje9XvMPs20NZEu8-',
  },
];

export const SignatureMenu = () => {
  return (
    <Section id="menu" className="bg-charcoal text-cream">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Popular <span className="text-orange">Dishes</span></h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange to-gold mx-auto mb-6"></div>
        <p className="text-cream/80 font-sans text-lg">Discover the dishes that keep our guests coming back for more. Prepared with the finest ingredients and authentic recipes.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mb-16 px-2 md:px-4">
        {dishes.map((dish, idx) => (
          <div key={idx} className="relative group h-[280px] md:h-[450px] overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-xl md:shadow-2xl shadow-charcoal/40">
            {/* Base Image */}
            <img 
              src={dish.image} 
              alt={dish.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Initial Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0"></div>

            {/* Hover Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 top-0 bg-charcoal/60 backdrop-blur-[6px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center border border-white/10 m-4 rounded-2xl transform translate-y-4 group-hover:translate-y-0">
              <div className="w-12 h-[1px] bg-gold mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
              
              <h3 className="font-serif text-xl md:text-3xl font-bold text-cream mb-2 md:mb-4 tracking-wide">
                {dish.name}
              </h3>
              
              <p className="hidden md:block text-cream/80 text-sm leading-relaxed font-sans mb-8 max-w-[240px]">
                {dish.description}
              </p>
              
              <div className="text-gold font-serif text-lg md:text-2xl font-bold mb-4 md:mb-8">
                {dish.price}
              </div>

              <div className="w-12 h-[1px] bg-gold mt-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
            </div>

            {/* Static Initial Label (Bottom left) */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 z-10 transition-opacity duration-500 group-hover:opacity-0">
              <h3 className="font-serif text-lg md:text-2xl font-bold text-cream drop-shadow-md">
                {dish.name}
              </h3>
              <div className="w-6 md:w-8 h-[2px] bg-gold mt-1 md:mt-2"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="/menu">
          <Button variant="outline" size="lg" className="border-orange text-orange hover:bg-orange hover:text-white transition-all">
            View Full Menu
          </Button>
        </a>
      </div>
    </Section>
  );
};
