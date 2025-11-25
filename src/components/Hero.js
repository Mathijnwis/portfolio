import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const handleScrollToGames = () => {
    const element = document.getElementById('games');
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Mathijn wismeijer</h1>
        <p>Game Developer & Gamer</p>
        <button
          type="button"
          className={styles.ctaButton}
          onClick={handleScrollToGames}
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
