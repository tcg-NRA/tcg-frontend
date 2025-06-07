// src/pages/DownloadPage.jsx
import React from 'react';

const windowsDownloadUrl =
  'https://drive.google.com/uc?export=download&id=1KKCGPzv-9sVBD7K1V4a74KTZ7r6NVOeQ';
const macDownloadUrl =
  'https://drive.google.com/uc?export=download&id=1g2rphPl4ZE_49s1cT_QuIOYDDWEM8WUe';

export default function DownloadPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Download the Game</h1>
      <p>
        You can download the latest version of our indie TCG game for Windows or
        Mac below:
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '1rem'
        }}
      >
        <a
          href={windowsDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#61dafb',
            color: '#000',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          Download for Windows
        </a>

        <a
          href={macDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#61dafb',
            color: '#000',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          Download for Mac
        </a>
      </div>
    </div>
  );
}