import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-dark/80 backdrop-blur-md border-b border-white/5"
      id="main-nav"
      aria-label="Main navigation"
    >
      <motion.a
        href="#"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity"
        aria-label="Elite Plumbing Solutions Home"
      >
        <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-dark font-black">
          E
        </div>
        <span>ELITE PLUMBING</span>
      </motion.a>

      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase opacity-80"
      >
        <a
          href="#services"
          className="hover:text-accent hover:opacity-100 transition-all active:scale-95 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
          aria-label="Navigate to Services section"
        >
          Services
        </a>
        <a
          href="#testimonials"
          className="hover:text-accent hover:opacity-100 transition-all active:scale-95 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
          aria-label="Navigate to Reviews section"
        >
          Reviews
        </a>
        <a
          href="#contact"
          className="hover:text-accent hover:opacity-100 transition-all active:scale-95 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
          aria-label="Navigate to Contact section"
        >
          Contact
        </a>
      </motion.div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white p-2 active:scale-95 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            <a
              href="#services"
              className="text-lg font-medium tracking-widest uppercase py-3 border-b border-white/5 hover:text-accent transition-colors active:pl-2 focus:outline-none focus-visible:text-accent focus-visible:pl-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-lg font-medium tracking-widest uppercase py-3 border-b border-white/5 hover:text-accent transition-colors active:pl-2 focus:outline-none focus-visible:text-accent focus-visible:pl-2"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-lg font-medium tracking-widest uppercase py-3 hover:text-accent transition-colors active:pl-2 focus:outline-none focus-visible:text-accent focus-visible:pl-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
