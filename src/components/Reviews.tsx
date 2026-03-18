import { Section } from './ui/Section';
import { Star } from 'lucide-react';

const reviewsRow1 = [
  { text: "Food is very tasty and healthy. Service is good and atmosphere is well maintained.", author: "Rahul S.", rating: 5 },
  { text: "Awesome place in Renukoot for outings with friends and family. Highly recommend the Mutton Biryani!", author: "Priya M.", rating: 5 },
  { text: "Beautiful interiors, calm vibe, and tasty food. The perfect spot for weekend dinners.", author: "Amit V.", rating: 4 },
  { text: "The best naan I've ever had. Truly lives up to the name Absolute Naansense!", author: "Suresh K.", rating: 5 },
  { text: "Excellent hospitality and the ambiance is just perfect for a date night.", author: "Anjali R.", rating: 5 },
];

const reviewsRow2 = [
  { text: "A hidden gem in Renukoot. The Chilli Mushroom is a must-try!", author: "Vikram T.", rating: 5 },
  { text: "Friendly staff and very quick service. Loved the mojitos.", author: "Neha G.", rating: 4 },
  { text: "Great value for money. The portions are generous and the food is fresh.", author: "Rajesh L.", rating: 5 },
  { text: "Clean, hygienic and very well-presented dishes. A solid 10/10.", author: "Meera B.", rating: 5 },
  { text: "Perfect for family gatherings. The kids loved the chocolate shake!", author: "Sanjay D.", rating: 5 },
];

const ReviewCard = ({ review }: { review: typeof reviewsRow1[0] }) => (
  <div className="bg-white p-5 md:p-8 rounded-2xl shadow-xl shadow-charcoal/5 border border-charcoal/5 relative min-w-[240px] md:min-w-[350px] mx-3 md:mx-4 transition-all duration-300 hover:shadow-orange/10 hover:border-orange/20">
    <div className="flex justify-start space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          className={i < review.rating ? "fill-gold text-gold" : "text-gray-200"} 
        />
      ))}
    </div>
    <p className="text-charcoal/80 font-sans italic mb-6 leading-relaxed text-sm md:text-base">
      "{review.text}"
    </p>
    <div className="flex items-center space-x-3">
      <div className="w-6 md:w-8 h-[1px] bg-orange"></div>
      <p className="font-serif text-charcoal font-bold text-sm md:text-base">{review.author}</p>
    </div>
  </div>
);

export const Reviews = () => {
  return (
    <Section id="reviews" className="bg-cream overflow-hidden px-0">
      <div className="text-center max-w-2xl mx-auto mb-16 px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-bold mb-6">What Our <span className="text-orange">Guests</span> Say</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange to-gold mx-auto mb-6"></div>
      </div>

      {/* Row 1: Moves Left to Right */}
      <div className="flex mb-8 overflow-hidden">
        <div className="flex animate-marquee-right pause-on-hover">
          {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2: Moves Right to Left */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-left pause-on-hover">
          {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      </div>
    </Section>
  );
};
