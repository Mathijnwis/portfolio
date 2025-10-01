import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Mathijn wismeijer</h1>
        <p>Game Developer & Gamer</p>
        <a href="#games" className={styles.ctaButton}>View My Work</a>
      </div>
    </section>
  );
};

export default Hero;