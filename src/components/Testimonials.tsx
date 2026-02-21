import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "The response time was incredible. They arrived within 45 minutes of my call and fixed a major burst pipe in the middle of the night. Professional and clean.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    text: "I've used Elite Plumbing for several of my commercial properties. Their attention to detail and transparent pricing is unmatched in the industry.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Restaurant Owner",
    text: "When our kitchen drain backed up on a Friday night, I thought we were done. Elite Plumbing saved our service and our reputation. Highly recommend.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-dark-soft" id="testimonials" aria-label="Client Testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Quote className="w-12 h-12 text-accent/20 mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">TRUSTED BY THE COMMUNITY.</h2>
          <p className="text-white/70">Don't just take our word for it. Here's what our clients have to say about our premium service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 bg-dark/50"
            >
              <div className="flex gap-1 mb-6" role="img" aria-label={`Rated ${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="text-lg italic text-white/80 mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold tracking-tight">{t.name}</p>
                <p className="text-xs text-accent font-bold tracking-widest uppercase">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
