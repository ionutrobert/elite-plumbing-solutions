import { motion } from "motion/react";
import { ShieldCheck, Clock, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center"
      id="hero"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg"
          alt="Professional Plumber at Work"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/80 to-dark/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              Available 24/7 for Emergencies
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-gradient">
              EXPERT PLUMBING <br />
              <span className="text-accent">CRAFTED</span> FOR YOU.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed">
              From emergency repairs to precision installations, we provide the
              highest standard of plumbing services in the city. Licensed,
              insured, and trusted by thousands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#contact"
              className="px-10 py-5 bg-accent text-dark font-bold text-sm tracking-widest uppercase hover:bg-accent/90 active:scale-95 transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
              aria-label="Book a plumbing service now"
            >
              Book Service Now
            </a>
            <a
              href="#services"
              className="px-10 py-5 border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-95 font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
              aria-label="View our plumbing services"
            >
              View Our Services
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-wrap gap-8 items-center pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3 opacity-60">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Licensed & Insured
              </span>
            </div>
            <div className="flex items-center gap-3 opacity-60">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold tracking-widest uppercase">
                60 Min Response
              </span>
            </div>
            <div className="flex items-center gap-3 opacity-60">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold tracking-widest uppercase">
                5-Star Rated
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
