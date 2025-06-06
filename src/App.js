import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // This line hits your Render URL’s /health endpoint
    fetch(`${process.env.REACT_APP_API_URL}/health`)
      .then(res => res.text())
      .then(text => {
        console.log('✅ Backend replied:', text);
      })
      .catch(err => {
        console.error('🔴 Fetch error:', err);
      });
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#20232a',
      color: '#61dafb',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1>Testing Frontend ↔ Backend</h1>
      <p>Open your browser’s Console (F12) to see the result of the fetch.</p>
    </div>
  );
}

export default App;