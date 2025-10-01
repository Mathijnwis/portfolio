import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { games } from '../data/gameData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './GameDetailPage.module.css'; // Make sure this path is correct

const GameDetailPage = () => {
  const { slug } = useParams();
  const game = games.find(g => g.slug === slug);

  if (!game || !game.details) {
    return (
      <div className={styles.detailPage}>
        <h1>Game Details Not Found</h1>
        <p>This game's details haven't been filled out yet.</p>
        <Link to="/" className={styles.backLink}>Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      <Link to="/#games" className={styles.backLink}> Back to Portfolio</Link>
      
      <h1>{game.title}</h1>
      <p className={styles.longDescription}>{game.details.longDescription}</p>

      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <h3>What I Learned</h3>
          <ul className={styles.learnedList}>
            {game.details.whatILearned.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <h3>Featured Code</h3>
          <div className={styles.codeBlock}>
            <SyntaxHighlighter language={game.details.featuredCode.language} style={vscDarkPlus}>
              {game.details.featuredCode.code.trim()}
            </SyntaxHighlighter>
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          <h3>Gallery</h3>
          <div className={styles.gallery}>
            {game.details.gallery.map((img, index) => (
              <img key={index} src={img} alt={`${game.title} screenshot ${index + 1}`} />
            ))}
          </div>
          <div className={styles.links}>
             <a href={game.gameLink} target="_blank" rel="noopener noreferrer" className={styles.button}>Play on Itch.io</a>
             {game.sourceLink && <a href={game.sourceLink} target="_blank" rel="noopener noreferrer" className={styles.buttonSecondary}>Source Code</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;