import React from 'react';
import styles from './About.module.css';
import profilePhoto from '../assets/images/profile-photo.jpg'; // 1. Import your photo

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      {/* 2. Add a wrapper div for the content */}
      <div className={styles.aboutContent}>
        {/* 3. Add the image element */}
        <img src={profilePhoto} alt="Mathijn wismeijer" className={styles.profileImage} />
        <div className={styles.aboutText}>
          <p>
            I’m a Unity game developer who enjoys building fun gameplay systems, experimenting with hardware, and trying out unexpected ideas.
            I focus on solid performance, and collaborative development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;