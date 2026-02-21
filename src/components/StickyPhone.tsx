import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function StickyPhone() {
  return (
    <motion.a
      href="tel:+18005550199"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-accent text-dark rounded-full shadow-2xl shadow-accent/20 hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
      id="sticky-phone-button"
      aria-label="Call us at +1 800 555 0199"
    >
      <Phone className="w-6 h-6 fill-current" aria-hidden="true" />
    </motion.a>
  );
}
