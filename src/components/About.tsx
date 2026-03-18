import { Section } from './ui/Section';

export const About = () => {
  return (
    <Section id="about" className="bg-cream">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[600px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Interior of Absolute Naansense" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10 rounded-tr-[100px] rounded-bl-[100px]"></div>
        </div>
        
        <div className="space-y-6 md:pl-8">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-bold leading-tight">
            About <br/><span className="text-orange">Absolute Naansense</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-orange to-gold"></div>
          
          <p className="text-lg text-charcoal/80 font-sans leading-relaxed">
            Absolute Naansense is a modern dining destination in Renukoot known for its aesthetic ambiance, flavorful dishes, and welcoming atmosphere. Whether you&apos;re planning a family dinner, meeting friends, or enjoying a relaxed evening meal, the restaurant offers the perfect setting.
          </p>
          
          <p className="text-lg text-charcoal/80 font-sans leading-relaxed">
            Customers love the stylish interiors, well-presented dishes, and a calm environment that makes every visit enjoyable. Come in and experience why we are one of the most aesthetic and modern dining spots in the area.
          </p>
          
          <div className="pt-4 grid grid-cols-2 gap-6">
            <div className="border-l-2 border-orange pl-4">
              <h4 className="font-serif text-3xl text-charcoal font-bold">4.4/5</h4>
              <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-widest mt-1">Stellar Ratings</p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <h4 className="font-serif text-3xl text-charcoal font-bold">Multi-Cuisine</h4>
              <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-widest mt-1">Delicious Menu</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
