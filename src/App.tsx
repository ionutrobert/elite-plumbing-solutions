/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyPhone from './components/StickyPhone';

export default function App() {
  return (
    <main className="relative min-h-screen bg-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
      <StickyPhone />
    </main>
  );
}

