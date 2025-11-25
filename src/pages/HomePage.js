import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import GamesGrid from '../components/GamesGrid';
import CodeShowcase from '../components/CodeShowcase';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="games">
        <GamesGrid />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;
