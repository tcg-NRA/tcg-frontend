//src/pages/DownloadPage.jsx
import React from 'react';

function DownloadPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Download the Game</h1>
      <p>You can download the latest version of our indie TCG game below:</p>
      <a href="https://your-download-link.com/latest.zip" target="_blank" rel="noopener noreferrer" style={{
        display: 'inline-block',
        marginTop: '1rem',
        padding: '1rem 2rem',
        backgroundColor: '#61dafb',
        color: '#000',
        borderRadius: '8px',
        textDecoration: 'none'
      }}>
        Download Now
      </a>
    </div>
  );
}

export default DownloadPage;