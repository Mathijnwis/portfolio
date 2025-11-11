import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GameCard.module.css';

const toPublic = (p) => {
  if (!p) return '';
  if (/^https?:\/\//i.test(p)) return p;
  const trimmed = p.replace(/^\/+/, '');
  return `${process.env.PUBLIC_URL}/${trimmed}`;
};

const GameCard = ({ game }) => {
  return (
    <div className={styles.card}>
      <img src={toPublic(game.imageUrl)} alt={game.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{game.title}</h3>
        <p className={styles.cardDescription}>{game.description}</p>
        <div className={styles.techTags}>
          {game.tech.map((tag, index) => (
            <span key={index} className={styles.techTag}>{tag}</span>
          ))}
        </div>
        <div className={styles.cardLinks}>
          <Link to={`/game/${game.slug}`} className={styles.button}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
