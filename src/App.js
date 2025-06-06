import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardPage from './pages/CardPage';
import CardDetailPage from './pages/CardDetailPage';
import DownloadPage from './pages/DownloadPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#282c34' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#61dafb' }}>Cards</Link>
        <Link to="/download" style={{ color: '#61dafb' }}>Download</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/cards/:id" element={<CardDetailPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;