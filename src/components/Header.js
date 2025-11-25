import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Mathijn wismeijer</div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => handleScroll('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => handleScroll('games')}
            >
              Games
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => handleScroll('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
