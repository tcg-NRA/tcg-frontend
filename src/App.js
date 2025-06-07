import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CoverPage from './pages/CoverPage';  
import DownloadPage from './pages/DownloadPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#282c34' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#61dafb' }}>Home</Link>
        <Link to="/cards" style={{ marginRight: '1rem', color: '#61dafb' }}>Card List</Link>
        <Link to="/download" style={{ color: '#61dafb' }}>Download</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CoverPage />} />   
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
