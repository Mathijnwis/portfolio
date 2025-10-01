import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import GamesGrid from '../components/GamesGrid';
import CodeShowcase from '../components/CodeShowcase';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <GamesGrid />
      <Contact />
    </main>
  );
};

export default HomePage;