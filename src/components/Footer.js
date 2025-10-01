import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>© {currentYear} Mathijn wismeijer. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;