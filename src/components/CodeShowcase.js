import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // A good-looking theme
import { codeSnippets } from '../data/codeData';
import styles from './CodeShowcase.module.css';

const CodeShowcase = () => {
  return (
    <section id="code" className={styles.showcaseSection}>
      <h2>Featured Code</h2>
      <p className={styles.intro}>Here are a few snippets I'm proud of. They demonstrate my approach to problem-solving and writing clean code.</p>
      
      {codeSnippets.map(snippet => (
        <div key={snippet.id} className={styles.codeSnippet}>
          <h3>{snippet.title}</h3>
          <p>{snippet.description}</p>
          <div className={styles.codeBlock}>
            <SyntaxHighlighter 
              language={snippet.language} 
              style={vscDarkPlus}
              showLineNumbers={true}
              wrapLines={true}
            >
              {snippet.code.trim()}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CodeShowcase;