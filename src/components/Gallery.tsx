import { Section } from './ui/Section';

const images = [
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1414235077428-338988692259?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
];

export const Gallery = () => {
  return (
    <Section id="gallery" className="bg-charcoal px-2 md:px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-cream font-bold mb-6">Our <span className="text-orange">Gallery</span></h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange to-gold mx-auto mb-6"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className={`relative overflow-hidden group rounded-xl ${
              idx === 1 ? 'md:row-span-2 md:col-span-2' : ''
            } ${
              idx === 4 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <div className="bg-charcoal w-full h-full">
              <img 
                src={src} 
                alt={`Gallery visual ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};
