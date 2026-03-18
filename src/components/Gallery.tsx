import { Section } from './ui/Section';

const images = [
  'https://lh3.googleusercontent.com/p/AF1QipOcsszsg2WPUQbjKoMMfpDkaUL7uxbcgG1PTE35',
  'https://lh3.googleusercontent.com/gps-cs-s/AHVAwersTo9QZdosva4sbwUldk-DM7RGgI241raORMcJbTJ5nGItdRcwf-Ds41TuUUghP34cP-5wYO4_tY-gYcxOC9bZC6fHxoSZj34ZNmLR4jje_XCejllmd8KBUuLcBKfHIbIQM1RJ',
  'https://lh3.googleusercontent.com/gps-cs-s/AHVAwep2-OB8btRzon0YmrtT40z7e-bE-_GBJ9QlaEfxtiVpPNZnHEHYeaYmsOYlooVOXLphO4qI28xWfxkkonl2r285fQguyI6JGCebF4IoP6FLAJuGoHS-TjJNEgKh1ftVgQ-Bu6rd',
  'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerooDV0-d5cbFPaQOv19Rz3ZITMMCeUfQ_YhwPCZ78mp-nDootaZ0dNzzg655DYK64N-2kHFdrtdUv4dymyim1QMkinQzZQ9ixkG96nfaQa5brePQXpa6wV7WlTgNRDIXF8WLBziA',
  'https://lh3.googleusercontent.com/p/AF1QipModgDkDGmvjuQxIMHyLH0SpZcUNzt8koVWdBa7',
  'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGbcq6o_9UwxHTYcvGGCnSwU92wAw_3YRHdVQXzORB8RKLORc-F1WXJSs4B32u5GP5NYb-sQs3kYVusr1v7swHaEvr1t38skCkSTigijWeDImJ3eQRfJ2wyW-lo952JhnOvr31AQ',
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
