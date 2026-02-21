import { motion } from 'motion/react';
import { Droplets, Flame, Wrench, Search, ShieldAlert, Home } from 'lucide-react';

const services = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Emergency Repairs",
    description: "Burst pipes, major leaks, and urgent repairs available 24/7. We arrive within 60 minutes."
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Water Heaters",
    description: "Installation and repair of tankless and traditional water heaters for consistent comfort."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Leak Detection",
    description: "Advanced acoustic and thermal imaging to find hidden leaks without destroying your walls."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Drain Cleaning",
    description: "Professional hydro-jetting and snaking to clear even the most stubborn blockages."
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Gas Line Service",
    description: "Safe and certified gas line installation, repair, and leak detection for your peace of mind."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Full Re-piping",
    description: "Complete residential and commercial re-piping services using high-quality PEX or Copper."
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-dark" id="services" aria-label="Our Plumbing Services">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">PROFESSIONAL SOLUTIONS FOR EVERY NEED.</h2>
          <div className="w-20 h-1 bg-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark p-12 hover:bg-dark-soft transition-colors group cursor-default"
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
