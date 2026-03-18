import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { ChevronLeft } from 'lucide-react';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const menuData = [
  {
    category: "Appetizers & Starters",
    items: [
      { name: "Chilli Mushroom", price: "₹320", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800", desc: "Crispy mushrooms in spicy tangy sauce." },
      { name: "Paneer Tikka", price: "₹380", image: "https://images.unsplash.com/photo-1567184109191-3776122f4150?q=80&w=800", desc: "Clay oven roasted cottage cheese." },
      { name: "Chicken 65", price: "₹420", image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800", desc: "Spiced deep-fried chicken specialty." }
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Mutton Biryani", price: "₹550", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800", desc: "Aromatic basmati rice with tender mutton." },
      { name: "Tandoori Chicken", price: "₹480", image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=800", desc: "Roasted perfection with yogurt marinade." },
      { name: "Dal Makhani", price: "₹350", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800", desc: "Creamy slow-cooked black lentils." },
      { name: "Butter Chicken", price: "₹490", image: "https://images.unsplash.com/photo-1603894584100-34863ea6b2dd?q=80&w=800", desc: "Classic rich tomato gravy chicken." }
    ]
  },
  {
    category: "Breads & Sides",
    items: [
      { name: "Butter Naan", price: "₹60", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800", desc: "Soft leavened bread with butter." },
      { name: "Garlic Naan", price: "₹80", image: "https://images.unsplash.com/photo-1605481744883-7977a456de95?q=80&w=800", desc: "Infused with fresh garlic and cilantro." }
    ]
  },
  {
    category: "Beverages & Desserts",
    items: [
      { name: "Fresh Mojito", price: "₹220", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=800", desc: "Minty lime refreshment." },
      { name: "Chocolate Shake", price: "₹250", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800", desc: "Indulgent rich chocolate blend." },
      { name: "Gulab Jamun", price: "₹180", image: "https://images.unsplash.com/photo-1593560704563-f176a2eb61db?q=80&w=800", desc: "Warm sweet milk dumplings." }
    ]
  }
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal pt-10 min-h-screen">
        <Section className="pb-2">
          
          
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-7xl text-cream font-bold mb-4">The Full <span className="text-orange">Menu</span></h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange to-gold mx-auto"></div>
          </div>

          {menuData.map((cat, cIdx) => (
            <div key={cIdx} className="mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-10 border-l-4 border-orange pl-6 leading-none">
                {cat.category}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="relative group h-[220px] md:h-[350px] overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 md:p-6 text-center border border-white/5 m-2 md:m-3 rounded-xl">
                      <h3 className="font-serif text-lg md:text-2xl text-cream font-bold mb-1 md:mb-2">{item.name}</h3>
                      <p className="hidden md:block text-cream/70 text-sm mb-4 font-sans">{item.desc}</p>
                      <div className="text-gold font-bold text-lg md:text-xl">{item.price}</div>
                    </div>

                    {/* Bottom Label (Initial) */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 transition-opacity duration-500 group-hover:opacity-0">
                      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end">
                        <h3 className="font-serif text-sm md:text-xl font-bold text-white drop-shadow-lg">{item.name}</h3>
                        <span className="text-gold font-bold text-xs md:text-base">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
