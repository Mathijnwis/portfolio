import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Mathijn wismeijer</div>
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#games">Games</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;