import React from 'react';
import { Link } from 'react-router-dom'; // Import Link!
import styles from './GameCard.module.css';

const GameCard = ({ game }) => {
  return (
    <div className={styles.card}>
      <img src={game.imageUrl} alt={game.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{game.title}</h3>
        <p className={styles.cardDescription}>{game.description}</p>
        
        <div className={styles.techTags}>
          {game.tech.map((tag, index) => (
            <span key={index} className={styles.techTag}>{tag}</span>
          ))}
        </div>
        
        <div className={styles.cardLinks}>
          {/* This now links to the detail page for this game */}
          <Link to={`/game/${game.slug}`} className={styles.button}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;