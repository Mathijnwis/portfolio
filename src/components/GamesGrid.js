import React from 'react';
import GameCard from './GameCard';
import { games } from '../data/gameData'; // Import your game data
import styles from './GamesGrid.module.css';

const GamesGrid = () => {
  return (
    <section id="games" className={styles.gamesSection}>
      <h2>My Games</h2>
      <div className={styles.gamesGrid}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default GamesGrid;