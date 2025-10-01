import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <p>I'm currently open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out!</p>
      <a href="mailto:Mathijnwismeijer@gmail.com" className={styles.emailButton}>Mathijnwismeijer@gmail.com</a>
      <div className={styles.socialLinks}>
        {/* Replace with your actual links */}
        <a href="https://github.com/Mathijnwis" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://mathijnhaat.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a>
      </div>
    </section>
  );
};

export default Contact; 