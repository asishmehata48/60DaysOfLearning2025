import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

export default function AllPages() {
  return (
    <div>
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}
